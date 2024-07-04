import { Router } from "express";
import { tradeRoute } from "./trade.route.js";
import { shareRoute } from "./share.route.js";

const defaultRoute = Router();

defaultRoute.use("/trade", tradeRoute);
defaultRoute.use("/share", shareRoute);

export default defaultRoute;
