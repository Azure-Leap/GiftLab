import { theGiftedTeamMembersData } from '@/data/intro-home/TheGiftedTeamMember'
import React from 'react'
import TheGiftedTeamMember from './theGiftedTeamMember'

const HomeIntroMembersRightSection = () => {
  return (
    <div className='grid grid-cols-2 gap-16 '>
        {theGiftedTeamMembersData.map((memberData, idx) => <TheGiftedTeamMember key={idx} {...memberData}/>)}
    </div>
  )
}

export default HomeIntroMembersRightSection