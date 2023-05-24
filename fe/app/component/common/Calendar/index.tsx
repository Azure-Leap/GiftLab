'use client'
import React, { useState } from 'react'
import { add, eachDayOfInterval, eachHourOfInterval, endOfDay, endOfMonth, endOfWeek, format, getDay, isEqual, isSameMonth, isToday, parse, startOfDay, startOfToday, startOfWeek } from 'date-fns'
import {FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')  // is exactly the same as array.filter(item => Boolean(item))
}

const Calendar = () => {

    let today = startOfToday(),
        [selectedDay, setSelectedDay] = useState(today),
        [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyy')),
        firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date()),
        calendarDaysArr = eachDayOfInterval({start : startOfWeek(firstDayCurrentMonth), end : endOfWeek(endOfMonth(firstDayCurrentMonth))}),

        nextMonth = () => {
            let firstDayNextMonth = add(firstDayCurrentMonth, {months : 1})
            setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
        },

        previousMonth = () => {
            let firstDayPreviousMonth = add(firstDayCurrentMonth, {months : -1});
            setCurrentMonth(format(firstDayPreviousMonth, 'MMM-yyyy'))
        };
        // console.log(calendarDaysArr);

        
  return (
    <div className='w-full'>
        <div className='flex items-center justify-between'>
       
            {/* Previous */}
            <button onClick={previousMonth}
                    type = 'button'
                    className='flex-none items-center justify-center p-1.5 text-gray-800 hover:text-gray-900'>
                    <span className='sr-only'>Previous month</span>
                    <FaChevronLeft className='w-5 h-5'/>
                    
            </button>

            <h2 className='font-semibold text-gray-900'>
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
            </h2>

            {/* Next */}
            <button onClick={nextMonth}
                    type = 'button'
                    className='flex-none items-center justify-center p-1.5 text-gray-800 hover:text-gray-900'>
                    <span className='sr-only'>Next month</span>
                    <FaChevronRight className='w-5 h-5'/>
            </button>
        </div>

        {/* 曜日 */}
        <div className='grid grid-cols-7 text-sm'>
            <span className='mx-auto flex h-8 w-8 items-center justify-center'>S</span>
            <span className='mx-auto flex h-8 w-8 items-center justify-center'>M</span>
            <span className='mx-auto flex h-8 w-8 items-center justify-center'>T</span>
            <span className='mx-auto flex h-8 w-8 items-center justify-center'>W</span>
            <span className='mx-auto flex h-8 w-8 items-center justify-center'>T</span>
            <span className='mx-auto flex h-8 w-8 items-center justify-center'>F</span>
            <span className='mx-auto flex h-8 w-8 items-center justify-center'>S</span>
        </div>

        {/* Days */}
        <div  className='grid grid-cols-7 text-sm' >
            {calendarDaysArr.map((day, dayIdx) => (
                <div 
                    key={dayIdx}
                    className={classNames(
                        dayIdx === 0 && gridColStartClasses[getDay(day)]
                    )}>
                        <button 
                            type='button'
                            onClick={()=>setSelectedDay(day)}
                            className={classNames(
                                // isEqual(day, selectedDay) && 'text-[#F7D060]'
                                !isEqual(day, selectedDay) &&
                                    isToday(day) && 'text-[#FF6969]',
                                !isEqual(day, selectedDay) &&
                                    !isToday(day) &&
                                    isSameMonth(day, firstDayCurrentMonth) &&
                                    'text-[#000]',
                                !isEqual(day, selectedDay) && 
                                    !isToday(day) && 
                                    !isSameMonth(day, firstDayCurrentMonth) && 
                                    'text-gray-400',
                                isEqual(day, selectedDay) && isToday(day) && 'bg-[#ff6969] text-[#fff] duration-[300ms]',
                                isEqual(day, selectedDay) && !isToday(day) && 'bg-[#9de1fd] duration-[300ms]',
                                !isEqual(day, selectedDay) && 'hover:bg-[#98D8AA] duration-[300ms]',
                                (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                                'mx-auto flex h-8 w-8 items-center justify-center rounded-[12px]'
                            )}>
                                <time dateTime={format(day, 'yyyy-MM-dd')}>
                                    {format(day, 'd')}
                                </time>
                            </button>
                </div>
            ))}
        </div>
    </div>
  )
}

const gridColStartClasses = [
    '', //Sunday // default => col-start-1 <--- medeej shd
    'col-start-2', //Monday
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7', //Saturday
]

export default Calendar