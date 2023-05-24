import { RequestHandler, Request, Response, NextFunction } from "express";
import User, { UserRole } from "../models/userModel";
import Comment from '../models/comment-user-profile'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";
import catchAsync from "../middleware/asyncHandler";
import UserNotFoundException from "../exception/user.not.found.exception";
import RequiredParametersException from "../exception/required.param.exception";
import BaseException from "../exception/base.exception";
import RatingUserProfile from "../models/rateUserProfile";

const reactions = [
  {
    title : 'Сэтгэл зүрхээ зориулагч догь нэгэн',
    people : []
  },
  {
    title : 'Майр мундаг',
    people : []
  },
  {
    title : 'Орчин бүрдүүлэгч',
    people : []
  },
  {
    title : 'Юу хийгээд байган бол?',
    people : []
  },
  {
    title : 'Ямартай ч нэг юм хийчдэг',
    people : []
  },
  {
    title : 'Идэвхгүй',
    people : []
  },
  {
    title : 'Бүртгүүлчээд ирдэггүй',
    people : []
  },
]

// ------------------------------------------------------------------------------------>>>
export const createUser: RequestHandler = catchAsync(async (req, res, next) => {
  console.log("BODY-CREATE",req.body);

  // User Data
  const newUser = await User.create(req.body);
  console.log("NewUser", newUser);
  const newRatings = await RatingUserProfile.create({userId : newUser.id, ratings : [], reactions:[...reactions]})
  console.log("newRatings", newRatings);
  const newComments = await Comment.create({userId : newUser.id, comments : []})
  console.log("newComments", newRatings);
  newUser.profileRatingId = newRatings._id
  newUser.profileComments = newComments._id
  await newUser.save()
  console.log("User", newUser);
  // console.log(newRatings)
  
  // Create Token
  const token = jwt.sign({id : newUser.id, role : newUser.role}, process.env.JWT_SECRET!, {
    expiresIn : process.env.JWT_LIMIT
  })

  // SEND
  res.status(200).json({
    message : 'succesful',
    newUser,
    token
  })
});


// ------------------------------------------------------------------------------------>>>
export const signIn : RequestHandler = catchAsync(async(req : Request,res : Response, next : NextFunction ) => {
    const {email, password} = req.body;
    
    if(!email || !password ) throw new BaseException('Email эсвэл Password буруу байна', 401)

    const user = await User.findOne({email}).select('+password').populate('profileRatingId').populate('profileComments');

    const isPassword = await bcrypt.compare(password, user!.password ) 

    if(!isPassword) throw new BaseException('Email эсвэл Password буруу байна', 401);

    const token = jwt.sign({id : user!.id, role : user!.role}, process.env.JWT_SECRET!, {
      expiresIn : process.env.JWT_LIMIT
    })

    res.status(200).json({
      successful : true,
      user,
      message : `Эргээд тавтай GiftLab-д тавтай морил ${user?.firstname}:>`,
      token 
    })
    
})



// ------------------------------------------------------------------------------------>>>
export const getUser: RequestHandler = catchAsync(async (req, res, next) => {
  const userId = req.params.id;

  const user = await User.findOne({_id : userId}).populate('profileRatingId').populate('profileComments');
  // const rate = await RatingUserProfile.find()
  if (!user) throw new UserNotFoundException();

  res.status(200).json({
    successful : true,
    user,
    // rate
  });
});


// ------------------------------------------------------------------------------------>>>
export const getOwnInfo: RequestHandler = catchAsync(async (req, res, next) => {
  
});


// ------------------------------------------------------------------------------------>>>
export const getUsers: RequestHandler = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    successful : true,
    users
  });
});


// ------------------------------------------------------------------------------------>>>
export const updateUser: RequestHandler = catchAsync(async (req, res, next) => {
  const userId = req.params.id;
  const userParams = req.body;

  const user = await User.findById(userId);
  if (!user) throw new UserNotFoundException();

  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      name: userParams.name,
      age: userParams.age,
      gender: userParams.gender,
      email: userParams.email,
      phone_number: userParams.phone_number,
      profileImg: userParams.profileImg,
    }
  );

  res.send(updatedUser);
});


// ------------------------------------------------------------------------------------>>>
export const deleteUser: RequestHandler = catchAsync(async (req, res, next) => {
  const {id} = req.params;
  await User.deleteOne({_id :id});
  res.status(200).json({
    successful : true,
    message : 'Амжилттай устлаа'
  })
});
// ------------------------------------------------------------------------------------>>>

export const getUserProfileRatings: RequestHandler = catchAsync(async (req, res, next) => {
  const {id} = req.params // profile id
  // console.log('idiii', id)
  const {userIdd} = req.body // person id who rated the profile
  
  const profileRatings = await RatingUserProfile.findOne({userId : id});
  
  res.json({
    profileRatings
  })

})

export const writeComment : RequestHandler = catchAsync(async(req,res,next) => {
  console.log('aaa')
  res.status(200).json({
    successful : true
  })
})

// REACT REACTION USERPROFILE DUDES!!!!
export const UpdateUserProfileRatings: RequestHandler = catchAsync(async (req, res, next) => {

  // ymar hunii profile rate hiih?
  const {id} = req.params // profile id
  
  // ratedPersonId => rate hijiga hun, title => ali btn, 
  const {ratedPersonId, title} : {ratedPersonId : String, title : string} = req.body 
  
  // tuhain profile iin hunii rating hesgiig database ees avah
  let profileRatings = await RatingUserProfile.findOne({userId : id});

  // tuhain rate hiih gej bui hun umnu react darsan bnu shalgah
  const isExistingPerson = profileRatings?.ratings.find(rating => rating.ratedPersonId == ratedPersonId )

  // rate hiih gej bui hun anh udaa hiih gej baiga uyd
  if(!isExistingPerson){

    // ratings ruu orno
    const newRating = {
      ratedPersonId,
      emoticons : [title], // ene hesgiig asuuh
    }
    // reactions ruu bas oruulah zuil

    // tuhain rate hiiij bui hung oruulah
    profileRatings!.ratings.push(newRating)

                // tuhain reactiong ymar neg hum darj bsn eseh
                const isExistingTitle = profileRatings?.reactions.find(reactions => reactions.title == title )
                if(!isExistingTitle) {
                  profileRatings?.reactions.push({
                  title,
                  people : [ratedPersonId]
                })
                // let updatedData = await RatingUserProfile.updateOne({userId : id}, {$set:{ratings : profileRatings?.ratings, reactions : profileRatings?.reactions}})
              } else {
                    const isReactedPerson = isExistingTitle.people.includes(ratedPersonId);
                    let newReactionPeople : any;
                    if(isReactedPerson) {
                         newReactionPeople = isExistingTitle.people.filter (personId => personId !== ratedPersonId )
                      
                    } else {
                         newReactionPeople = isExistingTitle.people.push(ratedPersonId)
                    }
                    profileRatings?.reactions.map(reaction => {
                      if(reaction.title == title ) {
                        return {
                          title,
                          people : newReactionPeople
                        }
                      } 
                      return reaction
                    })
                    
                }
    
    // shine darsanii daraah data
    let updatedData = await RatingUserProfile.updateOne({userId : id}, {$set:{ratings : profileRatings?.ratings, reactions : profileRatings?.reactions}})
    res.status(200).json({successful : true, updatedData})

  } else {


    // reactions deerhiig alga bolgoy
                              // tuhain reactiong ymar neg hum darj bsn eseh
                              const whatTitle = profileRatings?.reactions.find(reaction => reaction.title == title ),
                              isExistingPersonReaction = whatTitle?.people.includes(ratedPersonId);
                              let newReactionPeople : any;
                                  if(isExistingPersonReaction){
                                    newReactionPeople = whatTitle!.people.filter(personId => personId !== ratedPersonId )
                                  } else {
                                    whatTitle?.people.push(ratedPersonId)
                                    newReactionPeople = whatTitle?.people
                                  }
                                    
                                  const newReactions = profileRatings?.reactions.map(reaction => {
                                    if(reaction.title == title ) {
                                      console.log(reaction);
                                      return {
                                        title,
                                        people : [...newReactionPeople]
                                      }
                                    }
                                    return reaction
                                  })
                                  
                              

    // tuhain hun darahad tuhain emoticon iig umnu darsan eseh => darsan bol bhgu bolgoh, bhgu bol darsan bolgoh
    const isExistingEmoticonss = isExistingPerson.emoticons.includes(title)

    // daraagu bol
    if(!isExistingEmoticonss) {
      // darsan gej tuhain hunii emoticons arrayluu title iig hiih
      isExistingPerson.emoticons.push(title)

    }
    else {

      // umnu darsan bol tuhain emoticonsoos ter emoticon iig arilgah
      isExistingPerson.emoticons = isExistingPerson.emoticons.filter(emoticon => emoticon != title)

      if(isExistingPerson.emoticons.length == 0 ) {
        const newRatingsPeopleData = profileRatings?.ratings.filter(ratedPerson => ratedPerson.ratedPersonId != ratedPersonId)
        let newData = await RatingUserProfile.updateOne({userId : id}, {$set : {ratings : newRatingsPeopleData, reactions : newReactions}} )
        res.status(200).json({
          successful : true,
          newData
        })
        return
      }
    
    }

    const newUserRatings = profileRatings?.ratings.map(rating => {
      if(rating.ratedPersonId === ratedPersonId) {
        return isExistingPerson
      } else {
        return rating
      }
    })
    let newData = await RatingUserProfile.updateOne({userId : id}, {$set : {ratings : newUserRatings, reactions : newReactions}} )
  
    res.status(200).json({
      successful : true,
      newData
    })
  }

})

    // const updatedReactionArr = hasToChangeReactionArr.map((reaction : any) => {
    //   if(reaction.title === title){
    //     const isExistingPersonInTheReaction = reaction.people.includes(ratedPersonId)
    //     if(!isExistingPersonInTheReaction) {
    //       reaction.people.push(ratedPersonId)
    //       return {title,reaction}
    //     } else {
    //       const newArr = reaction.people.filter ((person : string) => person !== ratedPersonId)
    //       return {title, reaction : newArr}
    //     }
    //   } 
    //   return reaction
    // })







// Comments
// api/users/{id}/comments
export const writeCommentOnUserProfile: RequestHandler = catchAsync(async (req, res, next) => {
  console.log('aaaa')

})





// export const getComments: RequestHandler = catchAsync(async (req, res, next) => {
//   res.status(200).json({
//     status : 'good'
//   })
// })

export const getComments: RequestHandler = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  // const userId = req.params.id;

  // const user = await User.find({_id : userId});
  // const rate = await RatingUserProfile.find()
  // if (!user) throw new UserNotFoundException();

  res.status(200).json({
    successful : true
  });
});





// const validateUser = async (params: any) => {
//   const { name, age, gender, email, password, phone_number, profileImg } =
//     params;

//   if (
//     !name ||
//     !age ||
//     !gender ||
//     !email ||
//     !password ||
//     !phone_number ||
//     !profileImg
//   ) {
//     throw new RequiredParametersException("name, age, gender");
//   }

//   if (typeof age !== "number") {
//     throw new BaseException("'Age' утга заавал тоо байх ёстой");
//   }

//   const duplicatedByEmail = await User.findOne({ email });
//   const duplicatedByName = await User.findOne({ name });
//   if (duplicatedByEmail || duplicatedByName)
//     throw new BaseException(
//       (duplicatedByName ? "Нэр" : "И-мэйл") + " давхардсан байна"
//     );

//   return params;
// };




// export const createAdminUser: RequestHandler = catchAsync(
//   async (req, res, next) => {
//     const params = await validateUser(req.body);
//     const encryptedPassword = await bcrypt.hash(params.password, 10);

//     const user = await User.create({
//       name: params.name,
//       age: params.age,
//       gender: params.gender,
//       email: params.email,
//       password: encryptedPassword,
//       phone_number: params.phone_number,
//       profileImg: params.profileImg,
//       role: UserRole.ADMIN,
//     });

//     res.send(user);
//   }
// );
