import {Schema, model, PopulatedDoc, ObjectId} from 'mongoose'
import { IPaymentIntentOrder } from './paymentIntent'

import  Product, { IProduct } from './Products'

import { IUserModel } from './userModel'

export interface IPaymentOrder {
    userId : PopulatedDoc<IUserModel>
    // userId : string | ObjectId | IUserModel
    amount : Number
    status : String
    currency : String
    paymentIntentId : PopulatedDoc<IPaymentIntentOrder>
    products : IProduct[]
}

const paymentOrderSchema : any = new Schema<IPaymentOrder>({

    userId : {
        type : Schema.Types.ObjectId, 
        ref : 'User'
    },
    amount : {
        type : Number
    },
    status : String,
    currency : String,
    paymentIntentId : {
        type : Schema.Types.ObjectId,
        ref : 'PaymentIntentOrder'
    },
    products : [] //Product
},
{
    timestamps : true
})

const PaymentOrder = model<IPaymentOrder> ('PaymentOrder', paymentOrderSchema)


export default PaymentOrder