// This is just an exception for not waiting 1 hour before updating share rate
export class TooEarlyException extends Error {
  name = "Too Early Exception";
  constructor(message) {
    super(message);
    this.message = message;
    this.status = 400;
  }
}
