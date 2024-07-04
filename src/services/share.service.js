import moment from "moment";
import { NotFoundException } from "../exceptions/not-found.exception.js";
import { TooEarlyException } from "../exceptions/too-early.exception.js";
import { ShareRate } from "../models/share-rate.model.js";

// Only update after 1 hour after last change
export async function updateRate(symbol, rate) {
  const shareRate = await ShareRate.findByPk(symbol);
  if (!shareRate) {
    throw new NotFoundException("Share with given symbol not found");
  }

  const updatedAt = shareRate.updatedAt;

  // if it has been 1 hour or more from last update
  if (moment().subtract(1, "hour") < moment(updatedAt)) {
    throw new TooEarlyException(
      "You have to wait an hour before updating share rate again"
    );
  }

  shareRate.rate = rate;
  await shareRate.save();
  return "Success";
}

export async function getShares() {
  const shareRates = await ShareRate.findAll();
  return shareRates;
}
