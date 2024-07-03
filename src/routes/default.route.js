import { Router } from "express";
import { trade_route } from "./trade.route";
import { share_route } from "./share.route";

const default_route = Router();

default_route.use("/trade", trade_route);
default_route.use("/share", share_route);

export default default_route;
