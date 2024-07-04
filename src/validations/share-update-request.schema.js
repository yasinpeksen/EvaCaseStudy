import Joi from "joi";

export default Joi.object({
  symbol: Joi.string().uppercase().length(3).required(),
  price: Joi.number().min(0).precision(2),
});
