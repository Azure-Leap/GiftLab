import React from 'react'
import HomeIntroNavbarAndFooter from '../component/intro/layout-navbar'
import IntroContacUs from './1-hero'
import IntroContactForm from './2-form'
import IntroContactFrequentlyAskedQ from './3-frequentlyAskedQuestions'

const HomeIntroAbout = () => {
  return (
    <HomeIntroNavbarAndFooter>
        <IntroContacUs/>
        <IntroContactForm/>
        <IntroContactFrequentlyAskedQ/>
    </HomeIntroNavbarAndFooter>
  )
}

export default HomeIntroAbout