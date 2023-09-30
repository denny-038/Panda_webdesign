import React from 'react'
import Roadmap from '../Pictures/Roadmap.png'
import Innovative from '../Pictures/Innovative.png'
import ProblemSolving from  '../Pictures/Problem Solving.png'
import Efficient from '../Pictures/Efficient.png'
import Consultant from '../Pictures/Consultant.png'
import SAAS from '../Pictures/SAAS.png'


const Process = () => {
  return (
    <div id='Process' className='w-full bg-[#020716]'>
      <div className='max-w-screen-xl mx-auto py-10 px-4 text-center justify-center items-center'>
        <h1 className='font-bold text-[#E0E0E0] text-4xl md:text-5xl mb-4'>
          Process
        </h1>
        <p className='text-[#B5B2B2] text-[13px] md:text-xl'>
          Discover our workflow and what you can expect
        </p>
        {/* Insert Roadmap image heer */}
        <div className='flex items-center justify-center'>
            <img src={Roadmap} alt="/" className='w-5/6 h-[auto] mx-auto' />
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10'>
        <Card
            image={Innovative}
            title="1. Intake"
            description="In this initial stage, we offer a free consultancy session to understand your needs, challenges, and goals. We discuss your objectives and explore potential solutions."
          />
          <Card
            image={ProblemSolving}
            title="2. Auditing"
            description="Once we've gained a clear understanding of your situation, we proceed with a thorough audit. This involves a comprehensive assessment of your current systems, processes, and pain points to identify areas for improvement."
          />
          <Card
            image={Efficient}
            title="3. Strategy"
            description="Based on the audit findings, we formulate a customised strategy tailored to your specific requirements together with your domain experts. This strategy outlines the approach we'll take to address your challenges and achieve your goals."
          />
          <Card
            image={Consultant}
            title="4. Implementation"
            description="With a solid strategy in place, we move forward with the implementation of the proposed solutions. Our team of experts works diligently to bring the strategy to life, ensuring seamless integration and optimisation."
          />
          <Card
            image={SAAS}
            title="5. Refinement"
            description="Our commitment doesn't end with implementation. We maintain an ongoing relationship with our clients, continuously monitoring and refining the solutions as needed. We believe in staying agile and responsive to evolving needs, ensuring long-term success and satisfaction."
          />
        </div>
      </div>
    </div>
  )
}

export default Process

const Card = ({ title, description }) => {
    return (
      <div className='bg-[#122A41] lg:w-[250px] md:w-7/8 w-[90%] max-w-[300px] h-[400px] rounded-sm my-3 text-[#E1DEDE] flex flex-col justify-between items-center p-6 mx-auto sm:mx-0' style={{ backgroundImage: 'linear-gradient(to top, #020716, #052232)' }}>
        <div className='flex flex-col'>
          <span className='flex items-center mb-4'>
            <h1 className='text-xl'>{title}</h1>
          </span>
          <div className='text-[#B5B2B2] self-center text-left mt-2 leading-[2rem] font-light'>
            <p>{description}</p>
          </div>
        </div>
        <span></span>
      </div>
    );
  };
  
