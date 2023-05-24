class BaseException extends Error {
  static TEXT_DEFAULT_ERROR = "Таамаглаагүй алдаа гарлаа";

  statusCode = 500;
  constructor(message?: string, statusCode?: number) {
    super(message);

    if (statusCode) this.statusCode = statusCode;
  }
}

export default BaseException;
