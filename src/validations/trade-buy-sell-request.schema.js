import Joi from "joi";

export default Joi.object({
  portfolioId: Joi.number().required(),
  symbol: Joi.string().uppercase().length(3).required(),
  amount: Joi.number().min(0.01).required(),
});
