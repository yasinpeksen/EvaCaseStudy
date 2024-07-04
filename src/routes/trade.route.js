import { Router } from "express";
import { apiErrorHandler } from "../utils/api-error-handler.js";
import { buyShare, sellShare } from "../controllers/trade.controller.js";

const tradeRoute = Router();

tradeRoute.post("/buy", apiErrorHandler(buyShare));

tradeRoute.post("/sell", apiErrorHandler(sellShare));

export { tradeRoute };
