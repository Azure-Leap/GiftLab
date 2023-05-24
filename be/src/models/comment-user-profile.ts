import {Schema, model, PopulatedDoc} from 'mongoose'
import { IUserModel } from './userModel'

export interface ICommentModel {
    userId : string
    comments : [
        {
            personWhoWritesComment : PopulatedDoc<IUserModel> // id
            comment : string
        }
    ]
}

const commentSchema = new Schema<ICommentModel>(
    {
        userId : String,
        comments : [
            {
                personWhoWritesComment : {
                    type : Schema.Types.ObjectId,
                    ref : 'User'
                }, 
                comment : String
            }
        ]
    }
)

const Comment = model<ICommentModel>('Comment', commentSchema)
export default Comment