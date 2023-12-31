import React from 'react'
import Panda from '../Pictures/Panda Analytics White 1.png'
import Sky from '../Pictures/background_sky.png'
import { HashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2';

const handleCareersClick = () => {
  Swal.fire({
    icon: 'info', 
    title: 'No Vacancies',
    text: 'Sorry, there are no vacancies open currently. Please check back later.',
    confirmButtonText: 'OK',
    confirmButtonColor: '#348AB9',
  });
};

const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-col relative'
      style={{backgroundImage: `url(${Sky}), linear-gradient(to bottom, #053C5A, #020716)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <img src={Panda} alt="/" className= 'md:ml-10 md:my-7 md:mx-0 mx-auto my-5 w-[200px] h-[36px]' />
  
      <div className='lg:flex hidden absolute top-0 left-0 right-0 justify-center items-center h-[114px] text-white'>
        <ul className='md:text-xl flex space-x-10 font-extralight pb-4'>
          <li className='p-4' style={{ marginRight: '30px'}}>
            <link rel="stylesheet" href="" /><HashLink smooth to='/#Aboutus' > About Us </HashLink>
          </li>
          <li className='p-4' style={{ marginRight: '30px'}}><HashLink smooth to='/#Process' > Process </HashLink></li>
          <li className='p-4' style={{ marginRight: '30px'}}><a onClick={handleCareersClick}>Careers</a></li>
          <li className='p-4'><HashLink smooth to='/#Contact' > Contact </HashLink></li>
        </ul>
      </div>
    
    <div className='flex items-center justify-center min-h-screen text-white -mt-20'>
    <div className='sm:text-left md:text-center flex flex-col justify-center'>
      <div className='text-[#E1DEDE] md:text-[60px] text-4xl font-semibold md:p-4 p-1'>
        <span>Assist, Change </span>
        <span className='md:inline hidden p-2'>and Create</span>
      </div>
      <p className='md:hidden sm:block text-[#E1DEDE] md:text-[60px] text-4xl font-semibold p-1'>
        and Create
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
          <HashLink smooth to='/#Contact' > Contact Us </HashLink>
        </button>
        <button 
          className='md:inline-block hidden w-[175px] h-[55px] text-[18px] rounded-lg my-3 py-1.5 border border-[#b5b2b285]'>
          <HashLink smooth to='/#Aboutus' > Learn More </HashLink>
        </button>
        </div>
        <button 
          className='md:hidden w-[160px] h-[55px] font-medium text-[16px] rounded-lg my-3 mx-auto py-1.5 border border-[#b5b2b285]'>
          <HashLink smooth to='/#Contact' > Get in Touch </HashLink>
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero
