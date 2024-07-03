import { Router } from "express";

const trade_route = Router();

trade_route.post("/buy", (req, res) => {
  res.send("BUY");
});

trade_route.post("/sell", (req, res) => {
  res.send("SELL");
});

export { trade_route };
