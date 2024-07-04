import { Router } from "express";
import { apiErrorHandler } from "../utils/api-error-handler.js";
import { updateRate, getShares } from "../controllers/share.controller.js";

const shareRoute = Router();

// This should be changed by only admin with our example key
shareRoute.put("/:symbol", apiErrorHandler(updateRate));
shareRoute.get("/", apiErrorHandler(getShares));

export { shareRoute };
