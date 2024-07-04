export function validateInput(schema, input) {
  const { error, value } = schema.validate(input);

  if (error) {
    throw new ValidationException(error.message);
  }

  return value;
}
