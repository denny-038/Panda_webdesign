import React from 'react'
import Innovative from '../Pictures/Innovative.png'
import ProblemSolving from  '../Pictures/Problem Solving.png'
import Efficient from '../Pictures/Efficient.png'
import Consultant from '../Pictures/Consultant.png'
import SAAS from '../Pictures/SAAS.png'
import Others from '../Pictures/Others.png'

const Second = () => {
  return (
    <div className='w-full h-screen mx-auto text-center bg-[#020716]'>
      <h1 className='font-bold text-[#E0E0E0] my-1 md:text-[60px] text-3xl'>
        About Us
        </h1>
        <p className='text-[#B5B2B2] md:text-2xl text-[13px] font-medium'>
          Our work ethics and services we provide
          </p>
          <div className='grid md:grid-cols-3 md:grid-rows-2 grid-rows-3 grid-cols-2'>
          <div className='justify-center space-x-[44px] md:text-[28px] text-[15px]'>
          <div className='bg-[#122A41] md:w-[400px] md:h-[400px] h-[156px] w-[102px] rounded-sm my-3 text-[#E1DEDE] flex flex-col justify-between items-start p-6'
          style={{ bacgroundImage: 'linear-gradient(to top, #020716, #052232)' }}>
            <span className='flex items-center'>
            <img src={Innovative} alt="/" className='w-[40px] h-[40px] mr-4' />
            <p>Innovative</p>
            </span>
          <div className='text-[#B5B2B2] self-center text-left mt-[-70px] leading-[2rem] font-light w-[300px] h-[100px]'>
            <p>Unite people, devices,</p>
            <p>and information with our</p>
            <p>groundbreaking team</p>
          </div>
          </div>

          <div className='bg-[#122A41] w-[400px] h-[400px] rounded-sm my-3 text-[#E1DEDE] flex flex-col justify-between items-start p-6'
          style={{ backgroundImage: 'linear-gradient(to top, #020716, #052232)' }}>
            <span className='flex items-center'>
            <img src={ProblemSolving} alt="/" className='w-[40px] h-[40px] mr-4' />
            <p>Problem Solving</p>
            </span>
          <div className='text-[#B5B2B2] self-center text-left mt-[-100px] leading-[2rem] font-light w-[300px] h-[70px]'>
            <p>Your Challenges, Our</p>
            <p>Expertise</p>
          </div>
            <span></span>
          </div>
            
          <div className='bg-[#122A41] w-[400px] h-[400px] rounded-sm my-3 text-[#E1DEDE] flex flex-col justify-between items-start p-6'
          style={{ backgroundImage: 'linear-gradient(to top, #020716, #052232)' }}>
            <span className='flex items-center'>
            <img src={Efficient} alt="/" className='w-[40px] h-[40px] mr-4' />
            <p>Efficient</p>
            </span>
          <div className='text-[#B5B2B2] self-center text-left mt-[-70px] leading-[2rem] font-light w-[300px] h-[100px]'>
            <p>Optimal Performance</p>
            <p>Achieved in your desired</p>
            <p>time.</p>
          </div>
            <span></span>
          </div>
          
          </div>
          <div className='justify-center space-x-[44px] text-[28px]'>
          <div className='bg-[#122A41] w-[400px] h-[400px] rounded-sm my-3 text-[#E1DEDE] flex flex-col justify-between items-start p-6'
          style={{ backgroundImage: 'linear-gradient(to top, #020716, #052232)' }}>
            <span className='flex items-center'>
            <img src={Consultant} alt="/" className='w-[40px] h-[40px] mr-4' />
            <p>Consultant</p>
            </span>
          <div className='text-[#B5B2B2] self-center text-left mt-[-100px] leading-[2rem] font-light w-[300px] h-[70px]'>
            <p>Your Trusted Consulting</p>
            <p>Partner</p>
          </div>
            <span></span>
          </div>
            
          <div className='bg-[#122A41] w-[400px] h-[400px] rounded-sm my-3 text-[#E1DEDE] flex flex-col justify-between items-start p-6'
          style={{ backgroundImage: 'linear-gradient(to top, #020716, #052232)' }}>
            <span className='flex items-center'>
            <img src={SAAS} alt="/" className='w-[40px] h-[40px] mr-4' />
            <p>SAAS</p>
            </span>
          <div className='text-[#B5B2B2] self-center text-left mt-[-100px] leading-[2rem] font-light w-[300px] h-[70px]'>
            <p>Transforming Business</p>
            <p>with SaaS Innovation</p>
          </div>
            <span></span>
          </div>
            
          <div className='bg-[#122A41] w-[400px] h-[400px] rounded-sm my-3 text-[#E1DEDE] flex flex-col justify-between items-start p-6'
          style={{ backgroundImage: 'linear-gradient(to top, #020716, #052232)' }}>
            <span className='flex items-center'>
            <img src={Others} alt="/" className='w-[40px] h-[40px] mr-4' />
            <p>Others</p>
            </span>
          <div className='text-[#B5B2B2] self-center text-left mt-[-140px] leading-[2rem] font-light'>
            <p className='w-[300px] h-[35px] '>You ask, we do!</p>
          </div>
            <span></span>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Second
