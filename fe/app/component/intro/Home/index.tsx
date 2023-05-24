'use client'

import React, { useEffect, useRef, useState } from 'react'
import ServiceSection from './3-serviceSection'
import HomeIntroNavbar from '../layout-navbar'
import HomeIntroHero from './2-hero'
import HomeIntroAboutUs from './4-aboutUs'
import HomeIntroContactUs from './5-contactUs'
import HomeIntroAdvantage from './6-advantage'
import HomeIntroComments from './7-comments'

import HomeIntroNavbarAndFooter from '../layout-navbar'


const HomeIntro = () => {

  return (
        // Navbar
        <HomeIntroNavbarAndFooter>

            {/* Home */}
            <HomeIntroHero/>

            {/* Services */}
            <ServiceSection/>

            {/* About Us */}
            <HomeIntroAboutUs/>

            {/* Contact Us */}
            <HomeIntroContactUs/>

            {/* Advantage */}
            <HomeIntroAdvantage/>

            {/* Comments */}
            <HomeIntroComments/>
          
        </HomeIntroNavbarAndFooter>
    
  )
}

export default HomeIntro