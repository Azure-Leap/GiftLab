import {Schema, model, PopulatedDoc} from "mongoose";
import  jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'
import RatingUserProfile, { IRateUserProfile } from "./rateUserProfile";
import { ICommentModel } from "./comment-user-profile";

import PaymentOrder, { IPaymentOrder }  from "./paymentOrder";

export enum UserRole {
  user = "user",
  admin = "admin",
  superAdmin = "superAdmin"
}

export interface IUserModel {
  // username: string;
  firstname : string
  lastname : string
  age: number;
  gender: string;
  email: string;
  password: string;
  profileRatingId : PopulatedDoc<IRateUserProfile>
  profileComments : PopulatedDoc<ICommentModel>
  phoneNumber: number;
  profileImg: string;
  isActive: boolean;
  role: UserRole;


  socialLinks : [
    {
      title : String,
      link : String
    }
  ]
  bio : String
  orders : IPaymentOrder[]
}

// export interface IUserModelFunctions {
  
// }
const userSchema = new Schema(
  {
    firstname : String,
    lastname : String,
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    email: {
      type : String,
      required : [true, 'Мэйл хаягаа оруулна уу.'],
      unique:true,
      match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Мэйл хаягны бүтэц алдаатай байна.']
    },
    profileRatingId : {
      type : Schema.Types.ObjectId,
      ref : 'RatingUserProfile'
    },
    profileComments : {
      type : Schema.Types.ObjectId,
      ref : 'Comment'
    },
    password: {
      type: String,
      required: true,
      select : false
    },
    phoneNumber: {
      type: Number,
    },
    profileImg: {
      type: String
    },
    isActive: {
      type: Boolean
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.user,
    },

    // asuudaltai asuuh
    
    
    socialLinks : [
      {
        title : String,
        link : String
      }
    ],
    bio : String,

    // done bolson buh order from ma boy 
    orders : [] // Order
  },

  {
    timestamps: true,
  }
);


// HASH PASSWORD
userSchema.pre('save', async function(next){

  if(!this.isModified('password')) next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)

})

userSchema.pre('deleteOne', async function(next){
  // console.log(this._id)
  await RatingUserProfile.deleteMany();
  next();
})



// userSchema.methods.checkPassword = async (passwordUserPutted:any) => {

//     const checker = await bcrypt.compare(passwordUserPutted, this.password)
//     return checker
// }


// JWT BANK
// userSchema.methods.getJWT = function(){
//     // create token
//     const jToken : any = jwt.sign({id : this._id, role : this.role}, process.env.JWT_SECRET!, {
//         expiresIn : process.env.JWT_LIMIT
//     } )
//     return jToken
// }


const User = model("User", userSchema);

export default User;
