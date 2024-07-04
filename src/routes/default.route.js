import { Router } from "express";
import { tradeRoute } from "./trade.route";
import { shareRoute } from "./share.route";

const defaultRoute = Router();

defaultRoute.use("/trade", tradeRoute);
defaultRoute.use("/share", shareRoute);

export default defaultRoute;
