import Joi from "joi";

export default Joi.object({
  symbol: Joi.string().uppercase().length(3).required(),
  rate: Joi.number().min(0.01).precision(2).required(),
});
