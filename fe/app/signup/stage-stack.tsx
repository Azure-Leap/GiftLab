import React from 'react'
import {motion} from 'framer-motion'
import { useLoginForm } from '@/context/loginform'

const Stack = ({layoutId, label, value, name,type, icon} : {layoutId : string, label : string, value : number,name:string,type:string, icon : any}) => {
    const {userSignUpDataInDatabase, setUserSignUpDataInDatabase} = useLoginForm();
    let whichValue = [ userSignUpDataInDatabase.email, userSignUpDataInDatabase.password, userSignUpDataInDatabase.age, userSignUpDataInDatabase.firstname, userSignUpDataInDatabase.lastname, userSignUpDataInDatabase.phoneNumber, userSignUpDataInDatabase.role, userSignUpDataInDatabase.bio, userSignUpDataInDatabase.province ][value]
  return (
    <motion.div layoutId={layoutId} className={`p-4 bg-transparent w-[400px] ${value === 0 ? 'rounded-[20px_20px_0_0]' : value === 4 ? 'rounded-[0_0_20px_20px]' : 'rounded-[0px]'} flex gap-1 justify-between`}>
       <div className='flex items-center gap-1 text-[#FFF7D4]'>
          <span>{icon}</span>
          <p>{label} </p>
       </div>
        <input type={type} placeholder={whichValue} className='placeholder-white bg-transparent outline-none w-full text-end'
              onChange={setUserSignUpDataInDatabase} name={name} />
        {/* <p></p> */}
    </motion.div>
  )
}

export default Stack