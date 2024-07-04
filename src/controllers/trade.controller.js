import * as tradeService from "../services/trade.service.js";
import { validateInput } from "../utils/validate-input.js";
import tradeBuySellSchema from "../validations/trade-buy-sell-request.schema.js";

export async function buyShare(req, res) {
  const value = validateInput(tradeBuySellSchema, req.body);

  const result = await tradeService.buyShare(
    value.portfolioId,
    value.symbol,
    value.amount
  );

  res.send(result);
}

export async function sellShare(req, res) {
  const value = validateInput(tradeBuySellSchema, req.body);

  const result = await tradeService.sellShare(
    value.portfolioId,
    value.symbol,
    value.amount
  );

  res.send(result);
}

export async function getShareTransactions(req, res) {
  const result = await tradeService.getShareTransactions();
  res.send(result);
}
