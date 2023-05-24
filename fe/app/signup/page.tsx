'use client'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import Typewriter from '../component/common/typewriter'
import {motion,AnimatePresence } from 'framer-motion'
import Stage from './stage'
import { useLoginForm } from '@/context/loginform'
import Stack from './stage-stack'
import { RiUserHeartLine } from 'react-icons/ri'
import { MdOutlineMarkEmailRead, MdSecurity } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlinePhone, HiOutlineSparkles } from 'react-icons/hi'
import { RiUser5Line } from 'react-icons/ri'
import { SiSimplenote } from 'react-icons/si'
import { IoLocationOutline } from 'react-icons/io5'
import axios from 'axios'
import SignInAstronautLikeAri from '../component/signInAstronaut'


const Login = () => {

    const {setUserSignUpDataInDatabase, userSignUpDataInDatabase} = useLoginForm();
    const {firstname, lastname, province, bio, role, email, password, phoneNumber, age} = userSignUpDataInDatabase
    

    const [stage, setStage] = useState(0)
    const [infiniteAstro, setInfiniteAstro] = useState(false);
    const [infiniteAstroSaver, setInfiniteAstroSaver] = useState(false)
    // const [userDataInDatabase, setUserDataInDatabase] = useState({})

    // function infoFromInput(e : any){
    //     const obj : any = {}
    //     const {name, value} = e.target
    //     obj[name] = value;
    //     setUserDataInDatabase({...userDataInDatabase, ...obj })
    // }

    let ari : any = useRef(),
        badu : any = useRef(),
        rocket : any = useRef();
    useEffect(()=>{
        gsap.set(badu, {translateY:1000})
        gsap.fromTo(ari, {y: 1000}, {y:48, ease: 'back.out(1.4)', duration:2})

        setTimeout(()=>{
            setInfiniteAstro(true)
        }, 2400)

        setTimeout(()=>{
            setStage(1)
        }, 2800)

    },[])

    // bg-[#3c3d59]
  return (
    <div className=' bg-gradient-to-tr from-[#000] to-[#3c3d59] h-[100vh] text-[#f9fafb]'> 
        {/* Nav  */}
        <div className='h-[80px] flex items-center justify-between px-[40px] border-b-2 border-[#100720]'>
            <p>GiftLab</p>
            <p>Sign In</p>
        </div>

        {/* Content */}
        <div className={`flex justify-center  items-center h-[80vh]  w-[1360px] mx-auto`}>


            
            {/* Form */}
            <div className='flex justify-between w-full gap-4'>

                {/* Get Information */}
                <div className='flex items-center'>
                    <AnimatePresence>
                    {stage > -1 && stage < 31 && (
                        <motion.div exit={{translateY:-1000}} transition={{duration:2}}>
                            <img ref={el=>ari=el} className={`w-[200px] h-[200px] ${infiniteAstro ? 'animate-yInfinite' : ''}`} src="/signUpSvg/1.png" alt="" />
                        </motion.div>
                    )}
                    </AnimatePresence>
                    <div>
                        {/* stage 0 ==> Greetings */}
                        {stage < 3 && stage > 0 && (
                            <div className='shadow-[0_0_10px_rgba(255,255,255,1)] rounded-[20px]'>
                                 <div className='p-4  shadow-[inset_0_0_2px_rgba(255,255,255,1)] bg-gradient-to-tr from-[#000] to-[#3c3d59] w-[400px] rounded-[20px] flex flex-col gap-1'>
                                    <Typewriter text='Сайн байна уу? Бүртгэл үүсгэх гэж байгаад баярлалаа. Бүртгэл ээ эхэлцгээе!' duration={50} setStage={setStage} whatStage={2}/>
                                    {stage == 2 && (
                                        <div onClick={()=>{
                                            setTimeout(() => {
                                                gsap.to(badu, {translateY:0, duration : 2})
                                            }, 2000);
                                            setStage(3)
                                        }}>
                                            <Typewriter duration={50} setStage={setStage} whatStage={2} text='Үргэлжлүүлэх'/>
                                        </div>
                                    )}  
                                </div>                                
                            </div>
                        )}
                        {/* stage 1 */}
                        {stage > 2 && stage < 5 && 
                            <Stage
                                max={5}
                                min={2}
                                label='И-Мэйл хаяг аа оруулна уу'
                                layoutId='stage-1'
                                setStage={setStage}
                                stage={stage}
                                type='email'
                                name='email'
                                />
                        }

                        {/* stage 2 */}
                        {stage > 4 && stage < 7 && 
                            <Stage
                                max={7}
                                min={4}
                                label='Нууц үг ээ оруулна уу'
                                layoutId='stage-2'
                                setStage={setStage}
                                stage={stage}
                                type='password'
                                name='password'
                                />
                        }

                        {/* stage 3  */}
                        {stage > 6 && stage < 9 && 
                            <Stage
                                max={9}
                                min={6}
                                label='Хэдэн настай вэ?'
                                layoutId='stage-3'
                                setStage={setStage}
                                stage={stage}
                                type='text'
                                name='age'
                                />}

                        {/* stage 4 */}
                        {stage > 8 && stage < 11 && 
                            <Stage
                                max={11}
                                min={8}
                                label='Таныг хэн гэдэг вэ?'
                                layoutId='stage-4'
                                setStage={setStage}
                                stage={stage}
                                type='text'
                                name='firstname'
                                />}

                        {/* stage 5 */}
                        {stage > 10 && stage < 13 && 
                            <Stage
                                max={13}
                                min={10}
                                label='Таны овог юу вэ?'
                                layoutId='stage-5'
                                setStage={setStage}
                                stage={stage}
                                type='text'
                                name='lastname'
                                />}

                        {/* stage 6 */}
                        {stage > 12 && stage < 15 && 
                            <Stage
                                max={15}
                                min={12}
                                label='Таны утасны дугаар хэд вэ?'
                                layoutId='stage-6'
                                setStage={setStage}
                                stage={stage}
                                type='text'
                                name='phoneNumber'
                                />
                        }

                        {/* stage 7 new */}
                        {stage > 14 && stage < 17 && 
                            <Stage
                                max={17}
                                min={14}
                                label='Та ямар Role оор сайтад нэвтрэхийг хүсэж байна вэ? Энгийн хэрэглэгч бол "user" Пост хийх бол "admin" гэж бичнэ үү'
                                layoutId='stage-7'
                                setStage={setStage}
                                stage={stage}
                                type='text'
                                name='role'
                                />
                        }

                        {/* stage 8  */}
                        {stage > 16 && stage < 19 && 
                            <Stage
                                max={19}
                                min={16}
                                label='bio?'
                                layoutId='stage-8'
                                setStage={setStage}
                                stage={stage}
                                type='text'
                                name='bio'
                                />
                        }

                        {/* stage 9 */}
                        {stage > 18 && stage < 21 && 
                            <Stage
                                max={21}
                                min={18}
                                label='Та аль аймагт оршин сууж байгаа вэ?'
                                layoutId='stage-9'
                                setStage={setStage}
                                stage={stage}
                                type='text'
                                name='province'
                                />
                        }
                        {/* stage 10 */}
                        {stage > 20 && stage < 26 && (
                            <div className='p-4 bg-[rgba(255,255,255,0.2)] w-[400px] rounded-[20px] flex flex-col gap-1'>
                                <Typewriter text='Ерөнхий мэдээллийг амжилттай бүртгэж чадлаа.  Та энэ мэдээллээр бүртгэл үүсгэхийг хүсэж байна уу?' duration={50} setStage={setStage} whatStage={24}/>
                                {stage == 24 && (
                                    <div onClick={()=>{
                                        // setTimeout(() => {
                                        //     gsap.to(badu, {translateY:0, duration : 2})
                                        // }, 2000);
                                        // gsap.to(rocket, {translateY:-500, opacity:0, duration : 1})
                                        setStage(26);

                                    }}>
                                        < Typewriter duration={50} setStage={setStage} whatStage={24} text='Тэгье'/>
                                    </div>
                                )}
                            </div>
                        )}

                        {stage > 25 && stage < 30 && (
                            <div className='p-4 bg-[rgba(255,255,255,0.2)] w-[400px] rounded-[20px] flex flex-col gap-1'>
                                <Typewriter text='Баяр хүргэе ээ✨ Бүртгэлийн дурсгал болгоод биднээс өгч буй бэлэг болох профайл карт бэлэн боллоо🎉 ' duration={50} setStage={setStage} whatStage={29}/>
                                {stage == 29 && (
                                    <div onClick={async()=>{
                                        try {
                                        const res = await axios.post('http://localhost:8000/users', {...userSignUpDataInDatabase})
                                        setTimeout(() => {
                                            gsap.to(badu, {translateY:0, duration : 2})
                                        }, 2000);
                                        gsap.to(rocket, {translateY:-500, opacity:0, duration : 1})
                                        setStage(30);
                                        } catch (error : any) {
                                            console.log(error.response.data);
                                        }
                                    }}>

                                            <Typewriter duration={50} setStage={setStage} whatStage={29} text='Илгээх'/>

                                    </div>
                                )}
                            </div>
                        )}
                        {/* stage 11 - BYE BYE */}
                        <AnimatePresence>
                            {stage > 29 && stage < 31 && (
                                <motion.div initial={{opacity:0, scale:0.3,transformOrigin:'left'}} animate={{opacity:1,scale:1}} exit={{opacity:0, translateY:10}} className='p-4 bg-[rgba(255,255,255,0.2)] w-[400px] rounded-[20px] flex flex-col gap-1'>
                                    <Typewriter text='Баяртай, GiftLab-д уулзацгаая bye, bye~' duration={50} setStage={setStage} whatStage={31}/>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                {/* Save Information in database */}
                <div className='flex items-center gap-4 justify-end '>
                    {/* Stack */}
                   { stage > 4 && stage < 26 && <AnimatePresence>
                                    <motion.div initial={{opacity : 0}} animate ={{opacity:1}} exit={{opacity:0, y : -10}} transition={{duration : 1}} className='rounded-[30px] shadow-[0_0px_10px_rgba(255,255,255,0.4)]'>
                                        <div  className='flex flex-col shadow-[inset_0_0_3px_rgba(255,255,255,1)] rounded-[30px] p-8 '>

                                            {/* stage 1  */}
                                            {stage > 4 && <Stack 
                                                                label='Email' 
                                                                layoutId='stage-1' 
                                                                value={0}
                                                                name='email'
                                                                icon={<MdOutlineMarkEmailRead/>}
                                                                type='text'/>}

                                            {/* stage 2 */}
                                            {stage > 6 && <Stack 
                                                                label='Password' 
                                                                layoutId='stage-2' 
                                                                value={1}
                                                                name='password'
                                                                icon={<MdSecurity/>}
                                                                type='text'/>}

                                            {/* stage 3 */}
                                            {stage > 8 && <Stack 
                                                                label='Age' 
                                                                layoutId='stage-3' 
                                                                value={2}
                                                                name='age'
                                                                icon={<HiOutlineSparkles/>}
                                                                type='text'/>}

                                            {/* stage 4 */}
                                            {stage > 10 && <Stack 
                                                                label='Firstname' 
                                                                layoutId='stage-4' 
                                                                value={3}
                                                                name='firstname'
                                                                icon={<RiUser5Line/>}
                                                                type='text'/>}

                                            {/* stage 5 */}
                                            {stage > 12 && <Stack 
                                                                label='Lastname' 
                                                                layoutId='stage-5' 
                                                                value={4}                             
                                                                type='text'
                                                                icon={<RiUserHeartLine/>}
                                                                name='lastname'/>}

                                            {/* stage 6  */}
                                            {stage > 14 && <Stack 
                                                                label='Phone number' 
                                                                layoutId='stage-6' 
                                                                value={5}                             
                                                                type='text'
                                                                icon={<HiOutlinePhone/>}
                                                                name='phoneNumber'/>}
                                            {/* stage 7 new */}
                                            {stage > 16 && <Stack 
                                                                label='Role' 
                                                                layoutId='stage-7' 
                                                                value={6}                             
                                                                type='text'
                                                                icon={<RiUserHeartLine/>}
                                                                name='role'/>}
                                            {/* stage 8 */}
                                            {stage > 18 && <Stack 
                                                                label='Bio' 
                                                                layoutId='stage-8' 
                                                                value={7}                             
                                                                type='text'
                                                                icon={<SiSimplenote/>}
                                                                name='bio'/>}
                                            {/* stage 9 */}
                                            {stage > 20 && <Stack 
                                                                label='Province' 
                                                                layoutId='stage-9' 
                                                                value={8}                             
                                                                type='text'
                                                                icon={<IoLocationOutline/>}
                                                                name='province'/>}
                                        </div>
                                    </motion.div>                   
                   </AnimatePresence> }

                    {/* {stage > 16 && <motion.p initial={{opacity:0}} animate={{opacity:1}}>Rocket</motion.p>} */}


            <AnimatePresence>{stage > 2 && stage < 27 && (
                // <motion.img initial={{translateY : 40, opacity : 0}} animate={{translateY : 0, opacity : 1 }} exit={{opacity : 0,translateY:-10}} transition={{duration:0.8}} className={`w-[200px] h-[200px] ${infiniteAstroSaver ? 'animate-yInfinite-1' : ''}`} src="/signUpSvg/2.png" alt="" />
                <motion.div initial={{translateY : 40, opacity : 0}} animate={{translateY : 0, opacity : 1 }} exit={{opacity : 0,translateY:-10}} transition={{duration:0.8}}><SignInAstronautLikeAri/></motion.div>
            )}</AnimatePresence>
                </div>

            </div>

            {stage > 25 && stage < 31 && (
                    <motion.div  ref={el=>rocket=el} layout initial={{opacity : 0, x : 100 }} animate={{opacity : 1, x : 0}} transition={{duration:1.5}} className=' w-[450px] text-white rounded-[30px]  flex flex-col gap-8 '>
                    {/* Top */}
                    <div className=' shadow-[0_0_10px_rgba(255,255,255,1)] rounded-[30px]'>
                        <div className=' shadow-[inset_0_0_2px_rgba(255,255,255,1)] bg-gradient-to-tr from-[#000] to-[#3c3d59] flex flex-col gap-2 items-center rounded-[30px] p-4'>
                            {/* ProIMG */}
                            <div className='flex flex-col gap-1 items-center '>
                                <div className='shadow-[0_0_4px_rgba(89,206,143,0.4)] rounded-full'>
                                    <img className='w-[140px] h-[140px] rounded-full p-1 bg-transparent shadow-[inset_0_0_10px_rgba(89,206,143,0.4)] ' src="https://i.pinimg.com/474x/1d/28/3f/1d283fa99eaed446cb474e478689938d.jpg" alt="" />
                                </div>
                                <p className='text-[#FFF7D4]'>@yoona</p>
                            </div>
                            {/* person's name */}
                            <div className='flex gap-1'>
                                <motion.p layoutId='stage-4' transition={{duration : 1}}>{firstname} </motion.p>
                                <motion.p layoutId='stage-5' transition={{duration : 1}}> {lastname}</motion.p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <motion.p layout className='pe-4 border-e-2 border-[#FFF7D4] flex justify-end text-[14px]'>Mongolia</motion.p>
                                <motion.p layoutId='stage-9' transition={{duration : 1}} className='ps-4 flex justify-start text-[14px]'>{province}</motion.p>
                            </div>
                            <motion.p layoutId='stage-8' transition={{duration : 1}} className='text-[12px] text-[#FFD95A]'>{bio}</motion.p>
                            
                        </div>                    
                    </div>

                    {/* Bottom */}
                    <div className='rounded-[30px] shadow-[0_0px_10px_rgba(255,255,255,0.4)]'>
                        <div className=' shadow-[inset_0_0px_1px_rgba(255,255,255,0.4)] bg-gradient-to-tr from-[#000] to-[#3c3d59] flex flex-col gap-2  rounded-[30px] p-4'>
                            <p className='text-[20px] font-medium'>Information</p>
                            <div className='flex w-full flex-col gap-4 '>
                                {/* person's role */}
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex items-center gap-2 text-[#FFF7D4]'>
                                        <span><RiUserHeartLine size={20}/></span>
                                        <p>Role</p>
                                    </div>
                                    <p>{role}</p>
                                </div>

                                {/* Email */}
                                <motion.div layoutId='stage-1' transition={{duration : 1}} className='flex justify-between w-full items-center'>
                                    <div className='flex items-center gap-2 text-[#FFF7D4]'>
                                        <span><MdOutlineMarkEmailRead size={20}/></span>
                                        <p>Email</p>
                                    </div>
                                    <p>{email}</p>
                                </motion.div>
                                <motion.div layoutId='stage-6' transition={{duration : 1}} className='flex justify-between w-full items-center'>
                                    <div className='flex items-center gap-2 text-[#FFF7D4]'>
                                        <span><HiOutlinePhone size={20}/></span>
                                        <p>Phone</p>
                                    </div>
                                    <p>{phoneNumber}</p>
                                </motion.div>
                                <motion.div layoutId='stage-3' transition={{duration : 1}} className='flex justify-between w-full items-center'>
                                    <div className='flex items-center gap-2 text-[#FFF7D4]'>
                                        <span><HiOutlineSparkles size={20}/></span>
                                        <p>Age</p>
                                    </div>
                                    <p>{age}</p>
                                </motion.div>

                            </div>
                            
                        </div>                    
                    </div>
                </motion.div>                
            )}
            
        </div>
    </div>
  )
}

export default Login