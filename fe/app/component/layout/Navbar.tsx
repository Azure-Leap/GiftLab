import React, { useRef, useState } from 'react'

import gsap from 'gsap';
import {motion, AnimatePresence} from 'framer-motion'

// ICON IMPORTS
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {FiClock, FiSearch, FiSettings} from 'react-icons/fi'
import { ImExit } from 'react-icons/im'

// LOCAL IMPORTS
import { dashboardCategory } from '@/data/home/home';
import Cart from '../common/cart/cart';
import { useCartStore } from '@/context/store';
import Link from 'next/link';
import { useNavbar } from '@/context/navbar';
import { useLoginForm } from '@/context/loginform';
import { useRouter } from 'next/navigation' 
import axios from 'axios';
import { useUser } from '@/context/user';
// import { getUserProfileData } from '@/utils/getProfileData';


const Navbar = ({children} : any) => {

    // const {userData,} = useUser()

    // const getUserProfileData = async(userId : string) => {
    //     try {
    //         const res = axios.get(`http://localhost:8000/users/${userData.user._id}`);
            
    //     } catch (error) {
    //         console.log(error.response)
    //     }
    // }



    const cartStore = useCartStore(),
          {dashboardCategoryState, setDashboardCategoryState}:any = useNavbar(),
          {userData,  setComments, setProfileRatings, setCheckUserProfile}:any = useUser(),
          { setThereIsUser} = useLoginForm(),
          
          router = useRouter();
          

          
    // const [dashboardCategoryState, setDashboardCategoryState] = useState('home')

    gsap.defaults({duration: 1.1, ease: "power4"});

    const [statusOfSidebar, setStatusOfSidebar] = useState(1);
    let arrow : any = useRef(0);

    const rotate90Deg = () => {
        console.log(arrow)
        console.log(statusOfSidebar);
        setStatusOfSidebar(prev => prev < 4 ? prev + 1 : prev = 1)
        gsap.to(arrow, { rotationZ: statusOfSidebar == 1 ? -90 : statusOfSidebar == 2 ? -270 : statusOfSidebar == 3 ? -180 : 0})
    }



  return (
    <div className='bg-[#e7e8f0] p-[20px_40px] h-[100vh] overflow-hidden'>


  
        
        {/* CONTAINER */}
        <div onClick={()=>setDashboardCategoryState(' ')} className='bg-[#e7e8f0]  p-2 grid grid-cols-12  gap-10 h-[95vh]'>
            <motion.div layout className={`${statusOfSidebar == 1 ? 'col-span-2' : 'col-span-1'} ${statusOfSidebar === 3 ? 'h-[48%] self-center' : 'h-full'} p-[2rem_1.5rem] shadow-[0px_0px_8px_rgba(0,0,0,0.4)] flex flex-col justify-between text-black rounded-[32px] bg-white `}>
                    <div>
                        {/* LOGO AND BUTTONS */}
                        <div className={`flex ${statusOfSidebar === 1 ? 'justify-between' : 'justify-center'} items-center`}>
                            <AnimatePresence>
                                {statusOfSidebar === 1 && (
                                        <motion.div layout>
                                            <motion.p layout initial={{y:-100}} animate={{y:0}} exit={{opacity : 0}}>GiftLab</motion.p>
                                        </motion.div>
                                )}              
                            </AnimatePresence>
                            <div 
                                ref={el => arrow = el}
                                onClick={rotate90Deg}
                                className={`${statusOfSidebar == 1 ? 'w-[2.2rem] h-[2.2rem]' : ''} rounded-[1.1rem] flex justify-center items-center cursor-pointer text-[18px]`}>
                                    <AiOutlineArrowLeft/>
                                    
                            </div>
                    
                        </div>
                    
                            {/* ACTIONS  */}
                        <div className='mt-8 flex flex-col justify-between '>
                            {/* content-top */}
                            <div className='flex flex-col gap-3 '>
                                {dashboardCategory.map((category, idx) => (
                                    // <Link href={`/${category.tag}`}>
                                    <div key={idx} onClick={async(e)=>{
                                            e.stopPropagation();
                                            if(category.tag === 'profile') {
                                                const res = await axios.get(`http://localhost:8000/users/${userData?.user?._id}`)
                                                setCheckUserProfile(res.data)
                                            }
                                            setDashboardCategoryState(category.tag);
                                        }} className={`flex gap-4 py-[10px] ${category.tag ===dashboardCategoryState && 'justify-center'} items-center relative cursor-pointer ${statusOfSidebar === 1 ? '' : 'justify-center'}  `}>
                                            <motion.span layout className='text-[20px] z-30 mix-blend-exclusion text-white'>{category.icon}</motion.span>
                                            {statusOfSidebar === 1 ? <motion.p layout className='z-30 mix-blend-exclusion text-white'>{category.title}</motion.p> : null}
                                            {category.tag === dashboardCategoryState && <motion.div layoutId="types" className="bg-[#e7e8f0] w-full h-full top-0 rounded-[8px] absolute z-20"/>}
                                        </div>
                                    // </Link>
                                ))}
                            </div>          
                        </div>
                    </div>
                    {/* content-bottom */}
                    <AnimatePresence>
                    {statusOfSidebar == 3 ? null : (
                                    <div className='flex flex-col gap-8'>
                                        <AnimatePresence>
                                            <motion.div layout className={`flex gap-4 items-center ${statusOfSidebar === 1 ? '' : 'justify-center'}  cursor-pointer `}>
                                                <motion.span layout className='text-[20px]'><FiSettings/></motion.span>
                                                {statusOfSidebar === 1 ? <motion.p layout initial={{x:100}} animate={{x:0}} exit={{opacity:0}}>Settings</motion.p> : null}
                                            </motion.div>
                                            <motion.div onClick={()=>{
                                                router.push('/signin')
                                                setThereIsUser(false)
                                            }} layout className={`flex gap-4 items-center ${statusOfSidebar === 1 ? '' : 'justify-center'}  cursor-pointer`}>
                                                <motion.span layout className='text-[20px]'><ImExit/></motion.span>
                                                {statusOfSidebar === 1 ? <motion.p layout initial={{y : 100 }} animate={{y:0}} exit={{opacity:0}}>Log Out</motion.p> : null}
                                            </motion.div>
                                        </AnimatePresence>
                                </div>
                    )}
                    </AnimatePresence>
            </motion.div>

            {/* MAIN CONTENT */}
            <motion.div layout className={`${ statusOfSidebar === 1 ? 'col-span-10' : 'col-span-11'} grid grid-cols-3 gap-10`}>
                {children}
            </motion.div>
            <AnimatePresence>
                  {cartStore.isOpen && <Cart/>}
              </AnimatePresence>

        </div>
    </div>
  )
}

export default Navbar