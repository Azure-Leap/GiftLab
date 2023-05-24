import BaseException from "./base.exception";

class CategoryNotFoundException extends BaseException {
  static message = "Ангилал олдсонгүй";
  static code = 400;

  constructor() {
    super(CategoryNotFoundException.message, CategoryNotFoundException.code);
  }
}

export default CategoryNotFoundException;
