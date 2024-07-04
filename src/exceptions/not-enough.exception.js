export class NotEnoughException extends Error {
  name = "Not Enough Exception";
  constructor(message) {
    super(message);
    this.message = message;
    this.status = 400;
  }
}
