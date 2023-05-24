'use client'
import React from 'react'
// import CountUp from 'react-countup'
import CountUp from 'react-countup';
import {GrFormAdd} from 'react-icons/gr'

const CountUpp = ({count,bg,title, unitSymbol } : any) => {
  return (
    <div className={`col-span-1 ${bg} flex flex-col items-center gap-4 text-center p-[72px_47px] rounded-[40px]`}>
        <div className='text-[50px] font-semibold leading-[66px] flex items-center'>
            <CountUp delay={1.5} duration={5} end={count}/>
            <p className='text-default-blac'>{unitSymbol}</p>
            <span>
                <GrFormAdd/>
            </span>
        </div>
        <p className='text-[22px] font-semibold'>
            {title}
        </p>

    </div>
  )
}

export default CountUpp