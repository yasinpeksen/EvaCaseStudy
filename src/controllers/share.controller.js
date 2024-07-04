import { arbitraryAppKey } from "../config/config.js";
import * as shareService from "../services/share.service.js";
import shareUpdateSchema from "../validations/share-update-request.schema.js";
import { UnauthorizedException } from "../exceptions/unaothorized.exception.js";

export async function updateRate(req, res) {
  if (
    !req.headers.authorization ||
    req.headers.authorization != arbitraryAppKey
  ) {
    // https://knowyourmeme.com/memes/you-have-no-power-here
    throw new UnauthorizedException("You have no power here");
  }

  const value = validateInput(shareUpdateSchema, {
    symbol: req.params.get("symbol"),
    rate: req.body.get("rate"),
  });

  const result = await shareService.updateRate(value.symbol, value.price);
  res.send(result);
}

export async function getShares(req, res) {
  const result = await shareService.getShares();
  res.send(result);
}
