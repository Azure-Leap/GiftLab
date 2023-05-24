import React from 'react'
import HomeIntroNavbarAndFooter from '../component/intro/layout-navbar'
import JoinOurTeam from './1-joinOurTeam'
// import JoinOurTeam from './1-joinOurTeam/CountUpp'
import GiftLabOurMission from './2-ourMission'
import OurValues from './3-ourValues'
import TheGiftedTeamMembers from './4-teamMembers'

const About = () => {
  return (
    <HomeIntroNavbarAndFooter>
        <div className='w-[1360px] mx-auto'>
          <JoinOurTeam/>
          <GiftLabOurMission/>
          <OurValues/>
          <TheGiftedTeamMembers/> 
        </div>
    </HomeIntroNavbarAndFooter>
  )
}

export default About
