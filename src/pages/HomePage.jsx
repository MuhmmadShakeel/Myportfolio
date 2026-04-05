import React from 'react'
import Hero from '../component/home/Hero'
import AboutMe from '../component/home/AboutMe'
import DevServices from '../component/home/DevServices'
import Faq from '../component/home/Faq'

function HomePage() {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <AboutMe/>
      <DevServices/>
      <Faq/>
    </div>
  )
}

export default HomePage
