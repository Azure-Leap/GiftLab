import {Schema, model} from "mongoose";
import PaymentOrder, { IPaymentOrder } from "./paymentOrder";
// import PaymentOrderModel,  from "./paymentOrder";

export interface IProduct {
  name : String
  description : String
  unitAmount : Number
  image : String
  quantity : Number
  orders : IPaymentOrder[]

}
// 1 order t bh producttai holbootoi
const productSchema = new Schema<IProduct>(
  {
    name : String,
    description : String,
    unitAmount : Number,
    image : String,
    quantity : {
      type : Number,
      default : 0
    },
    orders : [PaymentOrder]
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>("Product", productSchema);

export default Product;
