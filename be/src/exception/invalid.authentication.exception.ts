import BaseException from "./base.exception";

class InvalidAuthenticationException extends BaseException {
  static message = "И-мэйл эсвэл нууц үг буруу байна";
  static code = 401;

  constructor() {
    super(
      InvalidAuthenticationException.message,
      InvalidAuthenticationException.code
    );
  }
}

export default InvalidAuthenticationException;
