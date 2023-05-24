'use client'

// import Checkbox from "../components/checkbox"
import Input from "./input"
// import { loginInputsData } from "@/mock-datas/login-inputs"
import { useState } from "react"
import { useLoginForm } from "@/context/loginform"
import {gsap} from 'gsap'
import Checkbox from "../component/common/loginCheckbox"
import { loginInputsData } from "@/data/home/login-inputs"
import axios from "axios"
import { useRouter } from 'next/navigation' 
import { useUser } from "@/context/user"



const SignIn = () => {

  const router = useRouter()


  const {userSignUpDataInDatabase, setThereIsUser} = useLoginForm(),
        {setUserData} = useUser();

  
  const {email, password} = userSignUpDataInDatabase
  console.log(email, password);


  return (
    <div className='flex items-center justify-center h-[100vh] bg-gradient-to-tr from-[#3c3d59] to-[#AEE2FF] text-white relative'>
      <div className=" shadow-[0_0_10px_rgba(255,255,255,1)] rounded-[20px]">
        <div className="flex flex-col gap-4 shadow-[inset_0_0_2px_rgba(255,255,255,1)] rounded-[20px] p-4">
          <div className="flex flex-col gap-5">
            {
              loginInputsData.map(input => <Input key={input.name} {...input}/>)
            }

          </div>
          <div className="flex items-center gap-3">
            <Checkbox/>
            <label className="text-[0.7rem]">The most beautiful girl in the universe ✨Chiaki🥰</label>
          </div>


            {/* Sign Up button */}
          <div className="flex justify-between">
            <button onClick={async()=>{
                                        try {
                                        const res = await axios.post('http://localhost:8000/signin', {email, password})
                                        setUserData(res.data)
                                        setThereIsUser(true)
                                        router.push('/')
                                        } catch (error : any) {
                                            console.log(error.response.data);
                                        }
                                    }} className='p-[0.5rem_2.5rem] border-none rounded-[0.2rem] font-[500] text-[0.6rem] bg-transparent text-white mt-[1rem] self-start '>Sign In</button>
            <button onClick={()=>{
              return router.push('/signup')
            }} className='p-[0.5rem_2.5rem] border-none rounded-[0.2rem] font-[500] text-[0.6rem] bg-transparent text-white mt-[1rem] self-start '>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default SignIn