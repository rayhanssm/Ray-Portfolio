import React, { useState } from 'react'
import Edu1 from '../assets/edu1.png'
import Edu2 from '../assets/edu2.png'
import Exp1 from '../assets/exp1.png'
import Exp2 from '../assets/exp2.png'
import Exp3 from '../assets/exp3.png'
import Skill1 from '../assets/skill1.png'
import Skill2 from '../assets/skill2.png'
import Skill3 from '../assets/skill3.png'
import Skill4 from '../assets/skill4.png'

const Experience = () => {
  const [tab, setTab] = useState(1);
  const handleTab = (index) => setTab(index);

  return (
    <div name='experience' className='w-full h-auto px-6 pt-28 sm:p-20 bg-[#002651] text-[#FEFEFE]'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className={tab == 1 ? 'text-3xl sm:text-5xl font-black mb-8 text-[#7EDDFC]' : 'hidden'}>
          Experience
        </h1>
        <h1 className={tab == 2 ? 'text-3xl sm:text-5xl font-black mb-8 text-[#7EDDFC]' : 'hidden'}>
          Education
        </h1>
        <h1 className={tab == 3 ? 'text-3xl sm:text-5xl font-black mb-8 text-[#7EDDFC]' : 'hidden'}>
          Basic Skills
        </h1>

        <div className='inline-flex rounded-md shadow-sm'>
          <button type='button' onClick={() => handleTab(1)} className={tab == 1 ? 'focus:z-10 focus:bg-[#FF304F] py-2 px-5 text-sm bg-[#FF304F] rounded-l-md border border-[#FEFEFE]' : 'py-2 px-5 text-sm bg-transparent rounded-l-md border border-[#FEFEFE] hover:bg-[#FF304F]'}>
            Experience
          </button>
          <button type='button' onClick={() => handleTab(2)} className={tab == 2 ? 'focus:z-10 focus:bg-[#FF304F] py-2 px-5 text-sm bg-transparent border-t border-b border-[#FEFEFE]' : 'py-2 px-5 text-sm bg-transparent border-t border-b border-[#FEFEFE] hover:bg-[#FF304F]'}>
            Education
          </button>
          <button type='button' onClick={() => handleTab(3)} className={tab == 3 ? 'focus:z-10 focus:bg-[#FF304F] py-2 px-5 text-sm bg-transparent rounded-r-md border border-[#FEFEFE]' : 'py-2 px-5 text-sm bg-transparent rounded-r-md border border-[#FEFEFE] hover:bg-[#FF304F]'}>
            Basic Skills
          </button>
        </div>

        <div className={tab == 1 ? 'mt-8' : 'hidden'}>
          <div className='px-4 sm:px-10 py-6 mb-20 border-2 rounded-md bg-gradient-to-b from-[#FEFEFE20] to-[#FEFEFE10]'>
            <div className='flex items-center gap-10 mb-6'>
              <img src={Exp1} alt="FILE Magazine Logo" style={{width: '150px'}}/>
              <div>
                <h1 className='font-black text-lg sm:text-xl'>Director of Art</h1>
                <h1 className='text-sm md:text-lg'>at FILE Magazine</h1>
                <p className='text-[#FEFEFE60]'>Jan 2021 - Jan 2022</p>
              </div>
              </div>
            <div className='flex items-center gap-10 mb-6'>
              <img src={Exp2} alt="BNCC Logo" style={{width: '150px'}}/>
              <div>
                <h1 className='font-black text-lg sm:text-xl'>Activist and Staff</h1>
                <h1 className='text-sm md:text-lg'>at Bina Nusantara Computer Club</h1>
                <p className='text-[#FEFEFE60]'>Oct 2020 - Jan 2022</p>
              </div>
            </div>
            <div className='flex items-center gap-10 mb-6'>
              <img src={Exp3} alt="BNCC LnT Logo" style={{width: '150px'}}/>
              <div>
                <h1 className='font-black text-lg sm:text-xl'>Front-End LnT Member</h1>
                <h1 className='text-sm md:text-lg'>at Bina Nusantara Computer Club</h1>
                <p className='text-[#FEFEFE60]'>Oct 2021 - Jul 2022</p>
              </div>
            </div>
            <div className='flex items-center gap-10'>
              <img src={Exp3} alt="BNCC LnT Logo" style={{width: '150px'}}/>
              <div>
                <h1 className='font-black text-lg sm:text-xl'>Back-End LnT Member</h1>
                <h1 className='text-sm md:text-lg'>at Bina Nusantara Computer Club</h1>
                <p className='text-[#FEFEFE60]'>Oct 2020 - Jul 2021</p>
              </div>
            </div>
              <hr className='my-6 rounded-border border-[#FEFEFE60]'/>
            <div className='mb-4'>
              <h1 className='font-black'>TechnoScape 2022 as Design and Documentation Staff</h1>
              <p className='text-[#FEFEFE60]'>Jan 2022 - Jul 2022</p>
            </div>
            <div className='mb-4'>
              <h1 className='font-black'>TechnoScape 2021 as Design and Documentation Staff</h1>
              <p className='text-[#FEFEFE60]'>Jan 2021 - Jul 2021</p>
            </div>
            <div>
              <h1 className='font-black'>Technology Project Member as UI/UX Design</h1>
              <p className='text-[#FEFEFE60]'>Nov 2020 - Des 2020</p>
            </div>
          </div>
        </div>

        <div className={tab == 2 ? 'mt-8' : 'hidden'}>
          <div className='flex flex-col sm:items-left gap-10 px-4 sm:px-10 py-6 mb-20 border-2 rounded-md bg-gradient-to-b from-[#FEFEFE20] to-[#FEFEFE10]'>
            <div className='sm:flex items-center gap-10'>
              <img src={Edu1} alt="BINUS Logo" style={{width: '180px'}}/>
              <div>
                <h1 className='mt-4 sm:mt-0 font-black text-lg sm:text-xl'>Bina Nusantara University Jakarta</h1>
                <p className='text-[#FEFEFE60]'>2020 - present</p>
              </div>
            </div>
            <div className='sm:flex items-center gap-10'>
              <img src={Edu2} alt="Kartini Logo" style={{width: '180px'}}/>
              <div>
                <h1 className='mt-4 sm:mt-0 font-black text-lg sm:text-xl'>Kartini Vocational High School Batam</h1>
                <p className='text-[#FEFEFE60]'>2017 - 2020</p>
              </div>
            </div>
          </div>
        </div>

        <div className={tab == 3 ? 'mt-8' : 'hidden'}>
          <div className='sm:grid grid-cols-2 gap-x-12 gap-y-10 px-10 py-6 mb-20 border-2 rounded-md bg-gradient-to-b from-[#FEFEFE20] to-[#FEFEFE10]'>
            <div className='mb-4 flex flex-col justify-center items-center'>
              <img src={Skill1} alt="UI/UX Logo" style={{width: '100px'}} className='sm:grayscale hover:grayscale-0 duration-200'/>
              <h1 className='font-black'>UI/UX</h1>
            </div>
            <div className='mb-4 flex flex-col justify-center items-center'>
              <img src={Skill2} alt="HTML Logo" style={{width: '100px'}} className='sm:grayscale hover:grayscale-0 duration-200'/>
              <h1 className='font-black'>HTML</h1>
            </div>
            <div className='mb-4 flex flex-col justify-center items-center'>
              <img src={Skill3} alt="CSS Logo" style={{width: '100px'}} className='sm:grayscale hover:grayscale-0 duration-200'/>
              <h1 className='font-black'>CSS</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <img src={Skill4} alt="JS Logo" style={{width: '100px'}} className='sm:grayscale hover:grayscale-0 duration-200'/>
              <h1 className='font-black'>JavaScript</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience