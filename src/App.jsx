import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import WhyChooseUs from './components/WhyChooseUs'
import Service from './components/Service'
import Experience from './components/Experience'
import RakshakService from './components/RakshakService'
import Need from './components/Need'
import LifeSaved from './components/LifeSaved'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=''>
     <Nav/>
     <HeroSection/>
     <WhyChooseUs/>
     <Service/>
     <Experience/>
     <RakshakService/>
     <Need/>
     <LifeSaved/>
   </div>
  )
}

export default App
