import { Router } from 'express';
import { trade_route } from './trade.route';

const default_route = Router();

default_route.use('/trade', trade_route);

export default default_route;
