import {Schema, model, PopulatedDoc, ObjectId} from 'mongoose'
import { IUserModel } from './userModel'

export interface IPaymentIntentOrder {
    amount : Number
}

const paymentIntentOrder = new Schema<IPaymentIntentOrder>({
    amount : Number

},{
    timestamps : true
})

const PaymentIntentOrderModel = model<IPaymentIntentOrder> ('PaymentIntentOrder', paymentIntentOrder)


export default PaymentIntentOrderModel