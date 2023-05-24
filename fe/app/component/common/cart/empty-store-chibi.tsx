
import cuteToushiro from '@/public/shirochan.png'
import Image from 'next/image'
import {motion} from 'framer-motion'

const EmptyStore = () => {
    // console.log(cuteToushiro)
  return (
    <motion.div 
      initial = {{rotateZ : -15, opacity : 0, scale:0.5}}
      animate = {{rotateZ : 0, opacity : 0.75, scale : 1}}    
      className="flex items-center flex-col text-2xl font-medium pt-40 opacity-75">
        <h1>How much is Dulguun</h1>
        {/* <img src={cuteToushiro} alt="cute" /> */}
        {/* <img src={cuteToushiro} alt="" /> */}
        <Image src={cuteToushiro} alt='cute' width={200} height={200}/>
    </motion.div>
  )
}

export default EmptyStore