import { PortfolioShare } from "../models/portfolio-share.model.js";
import { Portfolio } from "../models/portfolio.model.js";
import { ShareRate } from "../models/share-rate.model.js";
import { ShareTransaction } from "../models/share-transaction.model.js";
import { Share } from "../models/share.model.js";
import { User } from "../models/user.model.js";

async function createSampleData() {
  const users = await User.bulkCreate(
    [
      { username: "test1" },
      { username: "test2" },
      { username: "test3" },
      { username: "test4" },
      { username: "test5" },
    ],
    {
      validate: true,
    }
  );

  const portfolios = await Portfolio.bulkCreate(
    [
      {
        id: 0,
        userId: users[0].id,
      },
      {
        id: 1,
        userId: users[1].id,
      },
      {
        id: 2,
        userId: users[2].id,
      },
      {
        id: 3,
        userId: users[3].id,
      },
      {
        id: 4,
        userId: users[4].id,
      },
    ],
    {
      validate: true,
    }
  );

  const shares = await Share.bulkCreate(
    [
      {
        symbol: "EVA",
        name: "EVA Commerce",
        maxAmount: 500,
      },
      {
        symbol: "GGL",
        name: "Google",
        maxAmount: 15000,
      },
      {
        symbol: "MCS",
        name: "Microsoft",
        description: "Microsoft stock",
        maxAmount: 125.8,
      },
      {
        symbol: "ETS",
        maxAmount: 10,
      },
      {
        symbol: "TRY",
        maxAmount: 10000,
      },
      {
        symbol: "HYP",
        maxAmount: 1,
      },
    ],
    {
      validate: true,
    }
  );

  const shareRates = await ShareRate.bulkCreate(
    [
      {
        symbol: "EVA",
        rate: 1550.25,
      },
      {
        symbol: "GGL",
        rate: 23.16,
      },
      {
        symbol: "MCS",
        rate: 12.01,
      },
      {
        symbol: "ETS",
        rate: 1.25,
      },
      {
        symbol: "TRY",
        rate: 288.12,
      },
      {
        symbol: "HYP",
        rate: 1337.07,
      },
    ],
    {
      validate: true,
    }
  );

  const portfolioShares = await PortfolioShare.bulkCreate([
    {
      portfolioId: portfolios[0].id,
      shareSymbol: "EVA",
      amount: 32,
    },
    {
      portfolioId: portfolios[0].id,
      shareSymbol: "MCS",
      amount: 5,
    },
    {
      portfolioId: portfolios[1].id,
      shareSymbol: "EVA",
      amount: 18,
    },
    {
      portfolioId: portfolios[1].id,
      shareSymbol: "TRY",
      amount: 5500,
    },
    {
      portfolioId: portfolios[2].id,
      shareSymbol: "EVA",
      amount: 99.25,
    },
    {
      portfolioId: portfolios[3].id,
      shareSymbol: "GGL",
      amount: 250,
    },
  ]);

  const shareTransactions = await ShareTransaction.bulkCreate([
    {
      portfolioId: portfolios[0].id,
      shareSymbol: "EVA",
      type: "BUY",
      amount: 10,
      priceAt: 12.55,
    },
    {
      portfolioId: portfolios[0].id,
      shareSymbol: "EVA",
      type: "SELL",
      amount: 8,
      priceAt: 25.42,
    },
    {
      portfolioId: portfolios[0].id,
      shareSymbol: "EVA",
      type: "BUY",
      amount: 30,
      priceAt: 1200.15,
    },
    {
      portfolioId: portfolios[0].id,
      shareSymbol: "MCS",
      type: "BUY",
      amount: 5,
      priceAt: 0.25,
    },
    {
      portfolioId: portfolios[1].id,
      shareSymbol: "EVA",
      type: "BUY",
      amount: 58,
      priceAt: 1200.12,
    },
    {
      portfolioId: portfolios[1].id,
      shareSymbol: "EVA",
      type: "SELL",
      amount: 40,
      priceAt: 500.88,
    },
    {
      portfolioId: portfolios[1].id,
      shareSymbol: "TRY",
      type: "BUY",
      amount: 8000,
      priceAt: 5.12,
    },
    {
      portfolioId: portfolios[1].id,
      shareSymbol: "TRY",
      type: "SELL",
      amount: 2500,
      priceAt: 1.25,
    },
    {
      portfolioId: portfolios[2].id,
      shareSymbol: "EVA",
      type: "BUY",
      amount: 99.25,
      priceAt: 1337.11,
    },
    {
      portfolioId: portfolios[3].id,
      shareSymbol: "GGL",
      type: "BUY",
      amount: 125,
      priceAt: 10.25,
    },
    {
      portfolioId: portfolios[3].id,
      shareSymbol: "GGL",
      type: "BUY",
      amount: 125,
      priceAt: 499.99,
    },
  ]);
}

export { createSampleData };
