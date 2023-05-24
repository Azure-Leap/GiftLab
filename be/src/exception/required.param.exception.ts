import BaseException from "./base.exception";

class RequiredParametersException extends BaseException {
  static message = "Шаардлагатай утгууд дутуу байна";
  static code = 400;

  constructor(message?: string) {
    let customMessage: string | undefined = undefined;
    if (message)
      customMessage = RequiredParametersException.message + ": " + message;

    super(
      customMessage ?? RequiredParametersException.message,
      RequiredParametersException.code
    );
  }
}

export default RequiredParametersException;
