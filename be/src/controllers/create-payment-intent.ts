import { RequestHandler, Request, Response } from "express";
import BaseException from "../exception/base.exception";
import catchAsync from "../middleware/asyncHandler";
import PaymentIntentOrderModel from "../models/paymentIntent";
import PaymentOrderModel from "../models/paymentOrder";

const calculateOrderAmount = (items : any) => {
    const totalPrice = items.reduce((acc : any, item : any)  => {
        console.log(item.unit_amount, item.quantity);
        return acc + item.unit_amount * item.quantity
    }, 0)
    return totalPrice
}

// bitgii oroldooroi
export const createPaymentIntent: RequestHandler = catchAsync(async (req : Request, res : Response) => {

    // Extract the data from the req
    const {items, payment_intent_id, userId} = req.body,
            products = items.map((item : any) => ({
                name : item.name,
                description : item.description,
                unit_amount : parseFloat(item.unit_amount),
                quantity : item.quantity,
                image : item.image
            }))

    // Data => Order
    // Create function ashigla
    const orderData = {
        userId,
        amount : calculateOrderAmount(items),
        currency : 'GiftLab Coin',
        status : 'pending',
        paymentIntentId : payment_intent_id,
        products
    }

    // Check if the payment intent exist
    if(payment_intent_id){
        // update database current order
        const currentIntent = await PaymentIntentOrderModel.findById(payment_intent_id)
        if(currentIntent) {
            const updatedIntent = await PaymentIntentOrderModel.updateOne(payment_intent_id,{
                amount : calculateOrderAmount(items)
            })
            const existingOrder = await PaymentOrderModel.find({paymentIntentId : payment_intent_id})
            // deerh product iig uguh uug bagshaas asuu
            // if(!existingOrder) throw new BaseException('gg payment')


            // update existing order
            const updatedOrder = await PaymentOrderModel.findByIdAndUpdate(existingOrder[0].id, {
                amount : calculateOrderAmount(items),
                products,
                status : 'pending'
            })
            res.status(200).json({paymentIntent : updatedIntent})
        }
    }else{
        // new order
        // create new paymentIntent in payment intent colllection
        const paymentIntent = await PaymentIntentOrderModel.create({amount : calculateOrderAmount(items)})
        orderData.paymentIntentId = paymentIntent.id
        PaymentOrderModel.create(orderData)
        res.status(200).json({paymentIntent})


    }
})