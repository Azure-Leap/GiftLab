import { Schema, model, PopulatedDoc } from "mongoose";
import { IUserModel } from "./userModel";

export interface IRateUserProfile {
    
    userId : PopulatedDoc<IUserModel>
    ratings : [
        {
            ratedPersonId : String
            emoticons : string[]
        }
    ]
    reactions : [
        {
            title : String,
            people : String[]
        }
        ]
    // cool : string[],
    // good : string[],
    // turuuAh : string[],
    // zulaaEgch : string[],
    // duulgaAh : string[],
    // lazy : string[],
    // gg : string[],


}

const ratingUserProfile = new Schema<IRateUserProfile>(
    {
        userId : {
            type : String,
            unique : true
        },
        ratings : [
            {
                ratedPersonId : String,
                emoticons : [String] // asuuh
            }
        ],
        reactions : [
            {
            title : String,
            people : [String]
            }
        ]
    }
)

const RatingUserProfile = model<IRateUserProfile>("RatingUserProfile", ratingUserProfile);
export default RatingUserProfile;
