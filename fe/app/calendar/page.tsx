'use client'
import { add, eachDayOfInterval, endOfMonth, endOfWeek, format, getDay, isEqual, isSameMonth, isToday, parse, startOfMonth, startOfToday } from 'date-fns'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function classNames(...classes : any){
    console.log(classes)
    return classes.filter(Boolean).join(' ')
}

const Calendar = () => {
    
    let today = startOfToday(),
        [selectedDay, setSelectedDay] = useState(today),
        [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyy')),
        firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date()),
        newDays = eachDayOfInterval({start : firstDayCurrentMonth, end : endOfWeek(endOfMonth(firstDayCurrentMonth)) }), // arr

        nextMonth = () => {
            let firstDayNextMonth = add(firstDayCurrentMonth, {months : 1})
            setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
        },
        previousMonth = () => {
            let firstDayPreviousMonth = add(firstDayCurrentMonth, {months : -1})
            setCurrentMonth(format(firstDayPreviousMonth, 'MMM-yyyy'))
        }
        
// console.log(currentMonth);
console.log(firstDayCurrentMonth)
// console.log(new Date());
  return (
    <div className='pt-16'>
        <div className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6:'>
            <div className='md:grid md:grid-cols-2 md:divide-x md:divide-gray-200'>
                 <div className='md:pr-14'>
                    <div className='flex items-center'>
                        <h2 className='flex-auto font-semibold text-gray-900'>
                            {format(firstDayCurrentMonth, 'MMMM yyyy')}
                        </h2>
                        <button 
                                onClick={previousMonth}
                                type='button'
                                className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
                                <span className='sr-only'>Previous month</span>
                                <FaChevronLeft className='w-5 h-5'/>
                        </button>
                        <button 
                                onClick={nextMonth}
                                type='button'
                                className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
                                <span className='sr-only'>Next month</span>
                                <FaChevronRight className='w-5 h-5'/>
                        </button>
                    </div>
                    <div></div>
                    <div className='grid grid-cols-7 mt-2 text-sm'>
                        {newDays.map((day, dayIdx) => (
                            <div key={day.toString()}
                                 className={classNames(
                                    dayIdx === 0 && colStartClasses[getDay(day)]
                                 )}>
                                <button type='button'
                                        onClick={()=>setSelectedDay(day)}
                                        className={classNames(
                                            isEqual(day, selectedDay) && 'text-[#F7D060]',
                                            !isEqual(day, selectedDay) &&
                                                isToday(day) &&
                                                'text-red-500',
                                            !isEqual(day, selectedDay) &&
                                                !isToday(day) && 
                                                isSameMonth(day, firstDayCurrentMonth) &&
                                                'text-gray-900',
                                            !isEqual(day, selectedDay) &&
                                                !isToday(day) &&
                                                !isSameMonth(day, firstDayCurrentMonth) &&
                                                'text-gray-400',
                                            isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                                            isEqual(day, selectedDay) && !isToday(day) &&
                                                'bg-gray-900',
                                            !isEqual(day,selectedDay) && 'hover:bg-gray-200',
                                            (isEqual(day, selectedDay) || isToday(day)) &&
                                            'font-semibold', 
                                            'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                        )}>
                                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                                        {format(day, 'd')}
                                    </time>
                                </button>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

let colStartClasses = [
    '', //Sunday
    'col-start-2', //Monday
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7', //Saturday
]

export default Calendar