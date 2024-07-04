class ValidationException extends Error {
  name = "Validation Exception";
  constructor(message) {
    super(message);
    this.message = message;
    this.status = 400;
  }
}
