import React from 'react'
import Panda from '../Pictures/Panda Analytics White 1.png'
import Sky from '../Pictures/background_sky.png'

const Navbar = () => {
  return (
    <div className='w-full h-screen flex flex-col relative'
      style={{backgroundImage: `url(${Sky}), linear-gradient(to bottom, #053C5A, #020716)`, backgroundBlendMode: 'overlay'}}>
      <img src={Panda} alt="/" className= 'md:ml-5 md:mx-0 mx-auto my-5 w-[200px] h-[36px]' />
  
      <div className='md:flex hidden absolute top-0 left-0 right-0 justify-center items-center h-[114px] text-white'>
        <ul className='md:text-3xl flex space-x-10 font-extralight pb-4'>
          <li className='p-4' style={{ marginRight: '30px'}}>
            <link rel="stylesheet" href="" />About us
          </li>
          <li className='p-4' style={{ marginRight: '30px'}}>Team</li>
          <li className='p-4' style={{ marginRight: '30px'}}>Careers</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    
    <div className='flex items-center justify-center min-h-screen text-white -mt-40'>
    <div className='sm:text-left md:text-center flex flex-col justify-center'>
      <div className='text-[#E1DEDE] md:text-[60px] text-4xl font-semibold md:p-4 p-1'>
        <span>Assist, Change </span>
        <span className='md:inline hidden p-2'>and Create</span>
      </div>
      <p className='md:hidden sm:block text-[#E1DEDE] md:text-[60px] text-4xl font-semibold p-1'>
        Create
      </p>
      <p className='text-[#E1DEDE] md:text-[60px] text-4xl font-semibold sm:justify-start md:p-4 p-1'>
        the desired digital future
      </p>
      <div>
        <p className='text-[#B5B2B2] md:text-2xl text-[13px] p-2'>
          Driving Business Success with IT Innovation
        </p>
        <div className='md:flex md:justify-center md:items-center'>
        <button 
          className='md:inline-block hidden bg-[#348AB9] text-[18px] rounded-lg font-medium my-3 mr-5 py-1.5 h-[55px] w-[175px]' 
          style={{ backgroundColor: 'rgba(52, 138, 185, 0.3)' }}>
          Connect Us
        </button>
        <button 
          className='md:inline-block hidden w-[175px] h-[55px] text-[18px] rounded-lg my-3 py-1.5 border border-[#b5b2b285]'>
          Learn More
        </button>
        </div>
        <button 
          className='md:hidden w-[130px] h-[35px] font-medium text-[14px] rounded-lg my-3 mx-auto py-1.5 border border-[#b5b2b285]'>
          Get in Touch
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Navbar
