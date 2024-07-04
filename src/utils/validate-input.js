import { ValidationException } from "../exceptions/validation.exception.js";

export function validateInput(schema, input) {
  const { error, value } = schema.validate(input);

  if (error) {
    throw new ValidationException(error.message);
  }

  return value;
}
