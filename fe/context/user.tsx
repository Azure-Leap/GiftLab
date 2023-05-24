import axios from 'axios'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type CommentsType = {
    personWhoWrites : string,
    comment : string
}

type ProfileRatingType = {
    ratedPersonId : string,
    emoticons : [string]
}

type UserObjectType = {
    profileRatingId : {
        ratings : [],
        reactions : []
    }
    profileComment : {

    }
}

type UserCheckProfilesTypes = {
    user : {
        profileRatingId : UserObjectType
        profileComments : []
        _id : string
    }
}

type UserType = {
    userData : object
    setUserData : (object : object) => void

    checkUserProfile : any,
    setCheckUserProfile : (object : object) => void
 
    comments : CommentsType[]
    setComments : (comments : CommentsType[]) => void

    ratings : ProfileRatingType[]
    setProfileRatings : (profileRatings : ProfileRatingType[]) => void

    // getNewDataOfUser : (id : string) => voidb
}

export const useUser = create<UserType>()(

    persist(
        (set) => ({
            userData : {
                profileRatingId : ""
            },
            setUserData : (newUserData) => set(state => ({userData : newUserData})),

            checkUserProfile : {},
            setCheckUserProfile : (object : object) =>  set(state => ({checkUserProfile : object})),

            comments : [],
            setComments : (comments) => set(state => ({comments})),

            ratings : [],
            setProfileRatings : (ratings ) => set(state=>({ratings})),

            // getNewDataOfUser : (id) => set((state) => {
            //     const reRenderAsync = async() => {
            //         const res = await axios.get(`http://localhost:8000/user/${id}`, {
            //             // headers : `Bearer ${}`
            //         })
            //         state.setCheckUserProfile(res.data)
            //     }
            //     reRenderAsync();
            //     return 
            // })
            
        }),
        {name : 'user'}
    )
)