import BaseException from "./base.exception";

class UserNotFoundException extends BaseException {
  static message = "Бүртгэлтэй хэрэглэгч олдсонгүй";
  static code = 400;

  constructor() {
    super(UserNotFoundException.message, UserNotFoundException.code);
  }
}

export default UserNotFoundException;
