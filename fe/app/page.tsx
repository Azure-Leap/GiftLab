'use client'
import {useEffect, useRef} from 'react'
import { Inter } from 'next/font/google'
import Home1stHero from './component/home-intro/1-hero'
import Navbar from './component/home-intro/0-navbar'
import Home0Navbar from './component/home-intro/0-navbar'
import { gsap } from 'gsap'
import Service from './component/home-intro/2-service'


const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  let heroPage = useRef(null),
      navbar = useRef(null);

  useEffect(()=>{
    console.log(heroPage);
    const tlScrollNavbarAndHeroPage = gsap.timeline({
      scrollTrigger : {
        // trigger : heroPage,
        start : "10%"
      }
    })
  },[])


  return (
    <main>
      <Home0Navbar navbar={navbar}/>
      <Home1stHero ref={heroPage}/>
      <Service/>
    </main>
  )
}
