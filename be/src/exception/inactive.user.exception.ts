import BaseException from "./base.exception";

class InactiveUserException extends BaseException {
  static message: "Идэвхигүй хэрэглэгч байна";
  static code: 400;

  constructor() {
    super(InactiveUserException.message, InactiveUserException.code);
  }
}

export default InactiveUserException;
