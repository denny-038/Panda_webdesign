import React from 'react'
import sky from  '../Pictures/lasysky.png'
import Mouse from '../Pictures/Mouse.png'


const Third = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'
        style={{ backgroundImage: `url(${sky}), linear-gradient(to top, #053C5A, #020716)`, backgroundBlendMode: 'overlay'}}>
        <div className='md:text-6xl text-5xl text-white flex flex-col items-center'>
        <p>Tell me about your</p>
        <p>Next Project</p>
        <div className="relative rounded-lg font-medium md:text-[20px] text-[14px] my-10 flex items-center justify-center md:w-[200px] w-[130px] md:h-[58px] h-[35px] md:bg-[#297AB0] bg-[rgba(255,255,255,0.3)]"
          style={{ backgroundColor: 'rgba(52, 138, 185, 0.2)' }}>
          <button className="absolute inset-0 flex items-center justify-center z-10 md:bg-transparent bg-[rgba(255,255,255,0.3)] rounded-lg">
            Get In Touch
          </button>
          <img src={Mouse} alt="/" className="absolute bottom-[-50%] right-[-15px] md:w-[63px] md:h-[59px] w-[40px] h-[35px]"
            style={{ transform: 'rotate(4deg)' }} />
        </div>
        </div>   
    </div>
  )
}

export default Third
