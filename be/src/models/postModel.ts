import {Schema, model, PopulatedDoc} from "mongoose";
import { ICategoryModel } from "./categoryModel";

// asuuh
export enum PostType {
  donation = 'donation',
  payment = 'payment',
  event = 'event'
}

export interface IPostModel {
  whoPosted : String
  title : String
  description : String
  image : String
  aboutUs : String
  carouselImg : [String]
  type : PostType
  category : [String]
  quote : String
  unit_amount : Number
  province : [String]
  goals : [String]
  remainingProductQuantity : Number
  totalProductQuantity : Number



  donatedPeople : Number
  location : String
  goal : Number // mungun goal
  reached : Number // goal percentage

  members : Number //participation people
  limit : Number
  isForm : Boolean
  duration : Date
  startDate : Date
  endDate : Date

  isActive : Boolean // duussan uguig helne

}

const postSchema = new Schema<IPostModel>( 
  {
    // PAYMENT
    whoPosted : {
      type : String,
      required : [true, 'Пост оруулсан Gifted хүн эсвэл байгуулагын нэр хэрэгтэй']
    },
    title : String,
    description : String,
    image : String,
    aboutUs : String,
    carouselImg : [String],
    type : {
      type : String,
      enum : Object.values(PostType),
      required : true
    },
    category : {
      type : [String],
      required : [true, 'Аль категорт хамаарах аа зааж өгнө үү']
    },
    totalProductQuantity : Number,
    remainingProductQuantity : Number,
    quote : String,
    unit_amount : Number,
    province : [String],
    goals : [String],

    // Donation+
    donatedPeople : Number,
    location : [String], // event deer index eer busad uyd [0] gej handah
    goal : Number,
    reached : Number,
    
    //+Event
    members : Number, //participation people
    limit : Number,
    isForm : Boolean,
    duration : Date,
    startDate : Date,
    endDate : Date,
    isActive : Boolean
  },
  {
    timestamps: true,
  }
);

const Post = model<IPostModel>("Post", postSchema);
export default Post;
