import {connect} from 'mongoose'

export const connectMongoDB = async()=>{
    const conn = await connect(process.env.MONGODB_URI!)
}
