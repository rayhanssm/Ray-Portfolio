import React from 'react'
import { Link } from 'react-scroll'
import {FaArrowDown} from 'react-icons/fa'
import Potrait from '../assets/potrait.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-[80vh] px-24 sm:px-12 md:flex justify-center items-center gap-8 bg-[#002651] bg-gradient-to-r from-[#775ADA] via-[#28c5fa5c] to-[#ff304f75] text-[#FEFEFE]'>
      <div className='sm:object-bottom bg-gradient-to-t from-[#fefefe1f] grayscale hover:grayscale-0 duration-200'>
        <img src={Potrait} alt="Potrait Image" style={{width: '350px'}}/>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl sm:text-4xl font-black my-2'>Hi! I’m</h1>
        <h1 className='text-4xl sm:text-5xl font-black my-2'>Ray Hans Sebastian Mantiri</h1>
        <h3 className='text-1xl sm:text-2xl text-[#fefefe85] my-4'>Front-End Development and UI/UX Design enthusiast</h3>
        <Link to='about' smooth={true}>
          <button className='border-2 rounded-md my-2 px-5 py-2 flex items-center hover:-translate-y-1 hover:scale-110 hover:bg-[#FF304F] hover:border-[#002651] hover:shadow-md duration-200'>See More!<FaArrowDown className='ml-3'/></button>
        </Link>
      </div>
    </div>
  )
}

export default Home