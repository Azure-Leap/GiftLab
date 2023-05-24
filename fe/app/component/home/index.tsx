import React from 'react'
import { BsLightningCharge } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'
import Navbar from '../layout/Navbar'
import Calendar from '../common/Calendar'
import EventSchedule from '../common/EventSchedule'
import { eachHourOfInterval, format, endOfDay,  startOfDay, startOfToday } from 'date-fns';
import { useUser } from '@/context/user'
// import { format } from 'path'


const HomeMasarap = () => {
    const {userData, checkUserProfile} = useUser();
    console.log(checkUserProfile);


    let today = startOfToday(),
    day24HourArr = eachHourOfInterval({start : startOfDay(today), end : endOfDay(today)});
// console.log(day24HourArr);
    const curTime = format(new Date(), 'HH');
    console.log(curTime);
  return (
    <Navbar>
        <div className=' col-span-3 grid grid-cols-3'>
            <div className='col-span-1'>aa</div>
            <div className='col-span-1'>aa</div>
            <div className='col-span-1 row-span-6 flex flex-col bg-white rounded-[32px] p-[1.5rem_1.5rem_1.5rem_1.5rem] gap-5 max-h-[100vh ]'>

                {/* TOP */}
                <div className='flex justify-between border-b-2 border-default-black py-2'>

                    <div className='grid content-center'>
                        <BsLightningCharge size={20}/>
                    </div>
                    
                    
                    <div className='flex gap-3 items-center justify-start'>
                        <div className='flex flex-col items-end'>
                            <p className='font-semibold'>{}</p>
                            <p className='text-[11px] text-[#b6b8cb]'>Oxford student</p>
                        </div>

                        <div className='rounded-[29px] overflow-hidden w-[48px] h-[48px]'>
                            <img className='w-full' src="https://i.pinimg.com/564x/66/bc/99/66bc99a825c216faaaa8e17d1c5602d5.jpg" alt="Chiaki" />
                        </div>
                    </div>
                </div>

                {/* MID ===> CALENDAR */}
                <div className='py-2'>
                    <Calendar/>
                </div>

                {/* EVENT */}
                <div className='h-[300px] overflow-scroll flex flex-col gap-12'>
                    {day24HourArr.map((hour, idx) => <EventSchedule key={idx} hour={format(hour, 'HH : mm')}/>)}
                </div>
            </div>
        </div>
    </Navbar>
  )
}

export default HomeMasarap