import React from 'react'
import Works1 from '../assets/works1.png'
import Works2 from '../assets/works2.png'
import Works3 from '../assets/works3.png'
import Works4 from '../assets/works4.png'
import Works5 from '../assets/works5.png'
import Works6 from '../assets/works6.png'
import Waves from '../assets/waves.svg'
import {FaGithub, FaFigma, FaGlobe, FaInstagram} from 'react-icons/fa'

const Works = () => {
  const openLink= url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div name='works' className='w-full h-auto bg-[#002651] text-[#FEFEFE]'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-black mb-8 text-[#7EDDFC]'>My Works</h1>
        <div className='grid grid-cols-3 gap-x-10 gap-y-1'>
          <div className='w-96 mb-20 border-2 rounded-md bg-gradient-to-b from-[#FEFEFE20] to-[#FEFEFE10]'>
            <div>
              <img src={Works1} alt="DanBam" />
            </div>
            <div className='p-4'>
              <h1 className='font-black text-xl'>DanBam</h1>
              <h1 className='mb-2 text-[#FEFEFE60]'>HCI (2021)</h1>
              <p className='h-24'>DanBam website is a project that me and my teammates developed for Human Computer Interaction course in 2nd semester.</p>
            </div>
            <div className='p-4'>
              <button className='hover:scale-125 duration-150' onClick={() => openLink('')}><FaGithub size='30px'/></button>
            </div>
          </div>
          <div className='w-96 mb-20 border-2 rounded-md bg-gradient-to-b from-[#FEFEFE20] to-[#FEFEFE10]'>
            <div>
              <img src={Works2} alt="PuddingFest 2022" />
            </div>
            <div className='p-4'>
              <h1 className='font-black text-xl'>PuddingFest 2022</h1>
              <h1 className='mb-2 text-[#FEFEFE60]'>BNCC LnT (2021-2022)</h1>
              <p className='h-24'>PuddingFest website is a final project that I developed for Front-End Development course in BNCC LnT.</p>
            </div>
            <div className='p-4'>
              <button className='hover:scale-125 duration-150' onClick={() => openLink('https://github.com/rayhanssm/FinalProject-LnT2022-Ray')}><FaGithub size='30px'/></button>
            </div>
          </div>
          <div className='w-96 mb-20 border-2 rounded-md bg-gradient-to-b from-[#FEFEFE20] to-[#FEFEFE10]'>
            <div>
              <img src={Works3} alt="TS 2022" />
            </div>
            <div className='p-4'>
              <h1 className='font-black text-xl'>TechnoScape 2022</h1>
              <h1 className='mb-2 text-[#FEFEFE60]'>BNCC (2022)</h1>
              <p className='h-24'>Designed landing page website mockup for the biggest annual event held by Bina Nusantara Computer Club.</p>
            </div>
            <div className='p-4'>
              <button className='hover:scale-125 duration-150' onClick={() => openLink('https://www.figma.com/file/wVuzfdOdFtP6SdJb8tvELH/TechnoScape-2022---Landing-Page?node-id=0%3A1&t=dfQs23p5PwOATh1u-3')}><FaFigma size='30px'/></button>
            </div>
          </div>
          <div className='w-96 mb-20 border-2 rounded-md bg-gradient-to-b from-[#FEFEFE20] to-[#FEFEFE10]'>
            <div>
              <img src={Works4} alt="TS 2021" />
            </div>
            <div className='p-4'>
              <h1 className='font-black text-xl'>TechnoScape 2021</h1>
              <h1 className='mb-2 text-[#FEFEFE60]'>BNCC (2021)</h1>
              <p className='h-24'>Designed one of the event's landing page website mockup for the biggest annual event held by Bina Nusantara Computer Club.</p>
            </div>
            <div className='p-4'>
              <button className='hover:scale-125 duration-150' onClick={() => openLink('https://www.figma.com/file/emi6CJ44cruyY3QvDpF08w/TechnoScape-2021---DW?node-id=0%3A1&t=PiE7TzNuPuzuB5SY-3')}><FaFigma size='30px'/></button>
            </div>
          </div>
          <div className='w-96 mb-20 border-2 rounded-md bg-gradient-to-b from-[#FEFEFE20] to-[#FEFEFE10]'>
            <div>
              <img src={Works5} alt="Basketball Court in Three.js" />
            </div>
            <div className='p-4'>
              <h1 className='font-black text-xl'>Basketball Court</h1>
              <h1 className='mb-2 text-[#FEFEFE60]'>Computer Graphics (2022)</h1>
              <p className='h-24'>A Three.js project for my Computer Graphics quiz course in 5th semester.</p>
            </div>
            <div className='p-4'>
              <button className='hover:scale-125 duration-150' onClick={() => openLink('')}><FaGithub size='30px'/></button>
            </div>
          </div>
          <div className='w-96 mb-20 border-2 rounded-md bg-gradient-to-b from-[#FEFEFE20] to-[#FEFEFE10]'>
            <div>
              <img src={Works6} alt="FILE Magazine" />
            </div>
            <div className='p-4'>
              <h1 className='font-black text-xl'>FILE Magazine</h1>
              <h1 className='mb-2 text-[#FEFEFE60]'>BNCC (2021-2022)</h1>
              <p className='h-24'>Created informative content related to technology for FILE Magazine's social media and website.</p>
            </div>
            <div className='p-4'>
              <button className='hover:scale-125 duration-150' onClick={() => openLink('https://www.instagram.com/filemagz/')}><FaInstagram size='30px'/></button>
              <button className='mx-4 hover:scale-125 duration-150' onClick={() => openLink('https://www.filemagz.com/author/ray-mantiri/')}><FaGlobe size='30px'/></button>
            </div>
          </div>  
        </div>
        <img src={Waves} alt="Waves SVG" />
      </div>
    </div>
  )
}

export default Works