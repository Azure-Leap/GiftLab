import React, { useState } from 'react'
import Comment from './comment'
import {motion, AnimatePresence} from 'framer-motion'
import { BsEmojiSunglasses, BsMic, BsSend } from 'react-icons/bs'
import { useUser } from '@/context/user'
import axios from 'axios'

const emoticons = [
  // SPY X FAMILY
  {
    
    img : '/spyXfamily-emoticons/gift-majime.png',
    tag : 'Сэтгэл зүрхээ зориулагч догь нэгэн'
  },
  {

    img : '/spyXfamily-emoticons/gift-evduitei1.png',
    tag : 'Майр мундаг'
  },
  {

    img : '/spyXfamily-emoticons/gift-haha.png',
    tag : 'Орчин бүрдүүлэгч'
  },

  {

    img : '/spyXfamily-emoticons/gift-haha.png',
    tag : 'Юу хийгээд байган бол?'
  },

  {
    img : '/spyXfamily-emoticons/gift-sanaazovmoor.png',
    tag : 'Ямартай ч нэг юм хийчдэг'
  },
  {

    img : '/spyXfamily-emoticons/gift-irdeggumuuhai.png',
    tag : 'Идэвхгүй'
  },
  {
    img : '/spyXfamily-emoticons/gift-hmm.png',
    tag : 'Бүртгүүлчээд ирдэггүй'
  }
]

const ProfileComments = () => {
  
  const {userData, setCheckUserProfile,checkUserProfile}:any = useUser()
  const { profileRatingId, profileComments, _id} : any = useUser().checkUserProfile.user
  
  const {ratings, reactions}:any = profileRatingId

  const [isTypeBtnClicked, setIsTypeBtnClicked] = useState(false)

  return (
    <div className='h-'>
        {/* Emoticons */}
        <div className='flex justify-between py-2 mb-8 '>
            {reactions.map((reaction:any, idx:number) => (
            <div 
            key={idx}
              onClick={async()=>{
                  try {
                    const data = {
                      title : emoticons[idx].tag,
                      userId : _id,
                      ratedPersonId : userData?.user?._id
                    }
                    // console.log(data)

                    await axios.put(`http://localhost:8000/users/${_id}/ratings`, {...data})

                    const res1 = await axios.get(`http://localhost:8000/users/${userData.user._id}`)

                    setCheckUserProfile(res1.data)
                    console.log(res1.data);
                  } catch (error) {
                    console.log(error)
                  }
              }}
              className='flex flex-col justify-center items-center gap-1 w-[60px] h-[60px] cursor-pointer'>
                <motion.p key={reaction.people.length} initial={{opacity : 0}} animate={{opacity:1}} className='text-[] font-semibold'>{reaction.people.length}</motion.p>
                {/* <img className='w-full cursor-pointer hover:scale-[1.4] active:scale-[1.2] duration-300' src={emoticons[idx].img} alt="a" /> */}
                
            </div>
            ))}
        </div>

        {/* Comments */}
        <div className='grid grid-cols-2 gap-8 overflow-y-scroll p-3 h-[58vh] border-b-2 border-[#e7e8f0]'>
            {/* Comment */}
            {[1,1,1,1,1,1,1,1,1].map((comment, idx) => (
                <div key={idx} className='col-span-1'>
                    <Comment/>
                </div>
            ))}
        </div>

        {/* Your Comment */}
        <div className='flex gap-4 px-[20px] mt-5 justify-between bg-[#e7e8f0] py-3 rounded-[10px] items-center shadow-[0_0_1px_rgba(0,0,0,0.5)]'>
            <div className='w-[85%]'>
                <input onClick={() => setIsTypeBtnClicked(true)} className='outline-none bg-transparent w-full' placeholder='Write a message' type="text" />
            </div>
            <motion.div className='flex gap-4 items-center'>
                <AnimatePresence>
                    <motion.span className='cursor-pointer' layout><BsEmojiSunglasses/></motion.span>
                    {/* <motion.span className='cursor-pointer' layout><BsMic/></motion.span> */}
                    {isTypeBtnClicked && <motion.span className='cursor-pointer' initial={{translateX : 100, opacity : 0}} animate={{translateX:0, opacity:1}} exit={{translateX : 100, opacity : 0}}><BsSend/></motion.span>}
                </AnimatePresence>
            </motion.div>
            </div>
        </div>
  )
}



export default ProfileComments