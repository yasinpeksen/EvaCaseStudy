export class UnauthorizedException extends Error {
  name = "Unauthorized Access Exception";
  constructor(message) {
    super(message);
    this.message = message;
    this.status = 403;
  }
}
