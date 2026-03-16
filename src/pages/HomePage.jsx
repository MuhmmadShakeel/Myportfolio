import React from 'react'
import Hero from '../component/home/Hero'
import AboutMe from '../component/home/AboutMe'
import DevServices from '../component/home/DevServices'
import Progress from '../component/home/Progress'
import Faq from '../component/home/Faq'

function HomePage() {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <DevServices/>
      <Progress/>
      <Faq/>
    </div>
  )
}

export default HomePage
