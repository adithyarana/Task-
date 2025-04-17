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
import ShadowCirlce from './components/ShadowCirlce'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-full overflow-hidden'>
     <Nav/>
     <HeroSection/>
     <WhyChooseUs/>
     <Service/>
     <Experience/>
     <RakshakService/>
     <Need/>
     <LifeSaved/>
     {/* <ShadowCirlce/> */}
   </div>
  )
}

export default App
