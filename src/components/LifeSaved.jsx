import React from 'react'
import life from '../assets/life.png'

const LifeSaved = () => {
  return (
    <div>
    <div className='flex w-full items-center justify-center'>
        <img
        src={life}
        alt='life-saved'
        className='w-4/5 mx-auto h-auto'
        />
    </div>
        <div className='w-1/2 my-4 text-center text-sm mx-auto'>
        AmbuRakshak has saved over 2,789 lives, including 530 pregnant women, ensuring hospital admission within an average of 21.6 minutes, 1,618 emergency patients, and 641 senior citizens receiving urgent care. With a strong commitment to emergency response,  we strive to achieve our mission of saving 100,000+ lives.
        </div>
    </div>
  )
}

export default LifeSaved