class ApiException extends Error {
  public message: string;

  public statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.message = message;
    this.statusCode = statusCode;
  }
}
export default ApiException;
