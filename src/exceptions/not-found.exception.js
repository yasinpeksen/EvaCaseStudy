export class NotFoundException extends Error {
  name = "Not Found Exception";
  constructor(message) {
    super(message);
    this.message = message;
    this.status = 404;
  }
}
