export class ApiErrors extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message: string): ApiErrors {
    return new ApiErrors(400, message);
  }

  static internal(message: string): ApiErrors {
    return new ApiErrors(500, message);
  }

  static forbidden(message: string): ApiErrors {
    return new ApiErrors(403, message);
  }
}
