import { RequestUser } from "../../middleware/authentication";

declare global {
  namespace Express {
    export interface Request {
      user: RequestUser;
    }
  }
}

export default global;
