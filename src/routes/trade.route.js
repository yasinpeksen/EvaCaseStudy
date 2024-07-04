import { Router } from "express";
import { apiErrorHandler } from "../utils/api-error-handler.js";
import {
  buyShare,
  getShareTransactions,
  sellShare,
} from "../controllers/trade.controller.js";

const tradeRoute = Router();

tradeRoute.post("/buy", apiErrorHandler(buyShare));

tradeRoute.post("/sell", apiErrorHandler(sellShare));

tradeRoute.get("/transactions", apiErrorHandler(getShareTransactions));

export { tradeRoute };
