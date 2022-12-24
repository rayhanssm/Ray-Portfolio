import React from 'react'
import AboutPic from '../assets/about.png'

const About = () => {
  const openLink= url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div name='about' className='w-full h-screen bg-[#002651] text-[#FEFEFE]  bg-gradient-to-b from-[#FEFEFE10]'>
      <div className='md:px-24 px-12 md:flex justify-around items-center h-screen'>
        <div className='w-[50%]'>
          <h1 className='text-3xl sm:text-5xl font-black mb-8 text-[#7EDDFC]'>About Me</h1>
          <p className='mb-8 sm:mb-4'>I am a computer science student, currently studying at Bina Nusantara University. I've been designing since vocational high school, and my parents used to ask me to design for them.</p>
          <p className='mb-8 sm:mb-4'>I'm interested in Front-End development and UI/UX because it's in line with my major and I want to learn more about it, for making a better interface that can be used for anyone.</p>
          <button onClick={() => openLink('https://drive.google.com/file/d/1m1bOX8NqdORfli6rhTrsBoNOhxXaiq3K/view?usp=share_link')} className='border-2 rounded-md my-2 px-5 py-2  flex items-center hover:-translate-y-1 hover:scale-110 hover:bg-[#FF304F] hover:border-[#002651] hover:shadow-md duration-200'>View CV</button>
        </div>
        <img src={AboutPic} alt="About Image" style={{width: '432px'}}/>
      </div>
    </div>
  )
}

export default About