import { Router } from "express";

const tradeRoute = Router();

tradeRoute.post("/buy", (req, res) => {
  res.send("BUY");
});

tradeRoute.post("/sell", (req, res) => {
  res.send("SELL");
});

export { tradeRoute };
