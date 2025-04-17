import React from 'react'

const ShadowCirlce = () => {
  return (
    <div className='p-10 aspect-square rounded-full gradient z-0 w-full relative'>
        <div className="w-16 h-16 aspect-square rounded-full bg-orange-400 absolute left-6 z-10 top-[10%]" />
        <div className='p-10 aspect-square rounded-full gradient z-20 bgbl'>
            <div className=' aspect-square rounded-full gradient z-10'>

            </div>
        </div>
    </div>
  )
}

export default ShadowCirlce