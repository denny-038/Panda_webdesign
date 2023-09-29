import React from 'react'
import Innovative from '../Pictures/Innovative.png'
import ProblemSolving from  '../Pictures/Problem Solving.png'
import Efficient from '../Pictures/Efficient.png'
import Consultant from '../Pictures/Consultant.png'
import SAAS from '../Pictures/SAAS.png'
import Others from '../Pictures/Others.png'

const Second = () => {
  return (
    <div id='Aboutus' className='w-full bg-[#020716]'>
      <div className='max-w-screen-xl mx-auto py-10 px-4 text-center'>
        <h1 className='font-bold text-[#E0E0E0] text-3xl md:text-5xl mb-4'>
          About Us
        </h1>
        <p className='text-[#B5B2B2] text-[13px] md:text-xl mb-6'>
          Discover our work ethics and services
        </p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-0'>
          <Card
            image={Innovative}
            title="Digital Transformation"
            description="We guide companies through digitalization processes to improve efficiency and competitiveness."
          />
          <Card
            image={ProblemSolving}
            title="Software Development"
            description="We create tailored software solutions to meet your unique business needs, providing scalable applications that drive growth and innovation."
          />
          <Card
            image={Efficient}
            title="AI Integration"
            description="We implement AI technologies to enhance and automate business processes and decision-making."
          />
          <Card
            image={Consultant}
            title="Collaboration"
            description="We collaborate with your domain experts, ensuring rapid development and continuous feedback to deliver effective solutions."
          />
          <Card
            image={SAAS}
            title="Transparent"
            description="We prioritize transparency through clear communication and a well-defined strategy and roadmap."
          />
          <Card
            image={Others}
            title="Free Consultancy"
            description="We offer an introductory consultancy session, providing you with valuable insights and expert advice as we explore potential solutions tailored to your business needs."
          />
        </div>
      </div>
    </div>
  );
}

export default Second;

const Card = ({ image, title, description }) => {
  return (
    <div className='bg-[#122A41] w-[400px] h-[400px] rounded-sm my-3 text-[#E1DEDE] flex flex-col justify-between items-start p-6  mx-auto sm:mx-0' style={{ backgroundImage: 'linear-gradient(to top, #020716, #052232)' }}>
      <span className='flex items-center'>
        <img src={image} alt={title} className='w-[40px] h-[40px] mr-4' />
        <h1 className='text-xl'>{title}</h1>
      </span>
      <div className='text-[#B5B2B2] self-center text-left mt-[-100px] leading-[2rem] font-light w-[300px] h-[70px]'>
        <p>{description}</p>
      </div>
      <span></span>
    </div>
  );
}