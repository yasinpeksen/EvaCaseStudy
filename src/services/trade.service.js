import { Share } from "../models/share.model.js";
import { Portfolio } from "../models/portfolio.model.js";
import { ShareTransaction } from "../models/share-transaction.model.js";
import { NotEnoughException } from "../exceptions/not-enough.exception.js";
import { ShareRate } from "../models/share-rate.model.js";
import { PortfolioShare } from "../models/portfolio-share.model.js";
import { DB } from "../config/db.js";

export async function buyShare(portfolioId, symbol, amount) {
  const share = await Share.findByPk(symbol);
  if (!share) {
    throw new NotFoundException("Share with given symbol not found");
  }
  const portfolio = await Portfolio.findByPk(portfolioId);
  if (!portfolio) {
    throw new NotFoundException("Portfolio with given id not found");
  }
  const shareRate = await ShareRate.findByPk(symbol);
  if (!shareRate) {
    throw new NotFoundException("Share rate with given symbol not found");
  }

  const shareMaxAmount = share.maxAmount;
  const calculatedTransactions = await calculateAllTransactions(symbol);

  if (calculatedTransactions + amount > shareMaxAmount) {
    const amountLeft = shareMaxAmount - calculatedTransactions;
    throw new NotEnoughException(
      `Not enough shares left to buy. You can only buy ${amountLeft} shares.`
    );
  }

  const newTransaction = await createShareTransaction(
    "BUY",
    amount,
    shareRate.rate,
    symbol,
    portfolioId
  );

  return newTransaction;
}

export async function sellShare(portfolioId, symbol, amount) {
  const share = await Share.findByPk(symbol);
  if (!share) {
    throw new NotFoundException("Share with given symbol not found");
  }
  const portfolio = await Portfolio.findByPk(portfolioId);
  if (!portfolio) {
    throw new NotFoundException("Portfolio with given id not found");
  }
  const shareRate = await ShareRate.findByPk(symbol);
  if (!shareRate) {
    throw new NotFoundException("Share rate with given symbol not found");
  }

  const calculatedTransactions = await calculateAllTransactions(symbol);

  if (calculatedTransactions - amount < 0) {
    const amountLeft = calculatedTransactions;
    throw new NotEnoughException(
      `Not enough shares left to sell. You can only sell ${amountLeft} shares.`
    );
  }

  const newTransaction = await createShareTransaction(
    "SELL",
    amount,
    shareRate.rate,
    symbol,
    portfolioId
  );

  return newTransaction;
}

async function calculateAllTransactions(symbol) {
  const shareBoughtTransactions = await ShareTransaction.sum("amount", {
    where: { shareSymbol: symbol, type: "BUY" },
  });
  const shareSoldTransactions = await ShareTransaction.sum("amount", {
    where: { shareSymbol: symbol, type: "SELL" },
  });

  console.log(await ShareTransaction.findAll({}));

  console.log("calculatedTransactions");
  console.log(symbol);
  console.log(shareBoughtTransactions, shareSoldTransactions);

  return shareBoughtTransactions - shareSoldTransactions;
}

async function createShareTransaction(
  type,
  amount,
  priceAt,
  shareSymbol,
  portfolioId
) {
  if (!["BUY", "SELL"].includes(type)) {
    throw new Error("Incorrect transaction type given");
  }

  const db = await DB.getInstance();
  const dbTransaction = await db.transaction();
  try {
    const [portfolioShare, _] = await PortfolioShare.findOrCreate({
      where: {
        PortfolioId: portfolioId,
        ShareSymbol: shareSymbol,
      },
      defaults: {
        amount: 0,
      },
      transaction: dbTransaction,
    });

    if (type === "SELL" && portfolioShare.amount < amount) {
      throw new NotEnoughException(
        `Not enough shares left to sell. You only have ${portfolioShare.amount} shares to sell.`
      );
    }

    const shareTransaction = await ShareTransaction.create(
      {
        type: type,
        amount: amount,
        priceAt: priceAt,
        ShareSymbol: shareSymbol,
        PortfolioId: portfolioId,
      },
      {
        transaction: dbTransaction,
      }
    );

    if (type === "SELL") {
      amount = -amount;
    }
    portfolioShare.amount += amount;

    await portfolioShare.save({ transaction: dbTransaction });
    await dbTransaction.commit();
    return shareTransaction;
  } catch (error) {
    await dbTransaction.rollback();
    throw error;
  }
}
export async function getShareTransactions() {
  const shareTransactions = await ShareTransaction.findAll();
  return shareTransactions;
}
