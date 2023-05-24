'use client'
import { useCartStore } from '@/context/store'
// import { SearchParamTypes } from '@/types/SearchParamType'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'

export const AddToCartBtn = ({clickedPost, bg, padX, outlineColor} : any) => {
  const cartStore = useCartStore()
  return (
    <div 
      onClick={()=> cartStore.addPostToCart({...clickedPost})}
      className='flex justify-center items-center'>
        <button className={`${bg} ${padX} rounded-[14px] text-white text-[14px] font-medium outline  hover:outline-offset-2 duration-300 ${outlineColor} hover:-translate-y-1 group`}><p className='group-hover:scale-[0.95] duration-300'>Add to cart</p></button>
        {/* <MdOutlineLocalGroceryStore/> */}
    </div>
         
  )
}

export const DonateBtn = () => {
    return(
        <div 
          
          className='flex gap-3 items-center justify-center text-lg font-bold bg-white text-signed-in-black p-[24px_28px] rounded-[48px]  shadow-[0_3px_12px_rgba(74,58,255,.18)] hover:translate-y-[-2px] transition-[500] hover:bg-purple hover:text-white '>
            <p>Donate</p>
            <MdOutlineLocalGroceryStore/>
         </div>
    )
}
