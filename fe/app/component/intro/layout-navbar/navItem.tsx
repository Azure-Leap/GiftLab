import Link from 'next/link'
import React from 'react'

const NavItem = ({value, title} : any) => {
    console.log(value)
  return (
    <Link href={value}>
        <p className='text-[18px] font-medium'>{title}</p>
    </Link>
  )
}

export default NavItem