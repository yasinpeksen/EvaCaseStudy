import * as shareService from "../services/share.service";
import shareUpdateSchema from "../validations/share-update-request.schema";

function updatePrice(req, res) {
  const { error, value } = shareUpdateSchema.validate(req.body);
  if (error) {
    throw new ValidationException(error.message);
  }

  shareService.updatePrice(value.symbol, value.price);
}

export { updatePrice };
