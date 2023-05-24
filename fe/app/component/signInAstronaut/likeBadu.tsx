import React from 'react'
import {motion} from 'framer-motion'
import {Player} from '@lottiefiles/react-lottie-player'
import signInAstronaut from '@/public/Animations/signInAstronaut.json'


const SignInAstronautLikeAri = () => {
  return (
    <motion.div layout className='flex items-center justify-center flex-col mt-24 w-[200px] h-[200px]'>
        {/* <motion.h1 initial={{opacity : 0, y : 20}} animate={{opacity:1, y:0}} transition={{delay : 0.5}}>
            Prepping ur order ✨
        </motion.h1> */}
        <Player autoplay loop src={signInAstronaut}></Player>
    </motion.div>
  )
}

export default SignInAstronautLikeAri