import React, {useState} from 'react'
import { Link } from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [navScroll, setNavScroll] = useState(false)
  
  const handleClick = () => setNav(!nav)
  const handleScroll = () => {
    if(window.scrollY >= 10){
      setNavScroll(true);  
    } else {
      setNavScroll(false);
    }
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <div className={navScroll ? 'md:px-24 px-6 fixed w-full h-[80px] flex justify-between items-center text-[#FEFEFE] backdrop-blur-md duration-200' : 'md:px-24 px-6 fixed w-full h-[80px] flex justify-between items-center text-[#FEFEFE] duration-200'}>
      <div>
        <Link to='home' smooth={true}><img src={Logo} alt="Logo Image" style={{width: '30px'}}/></Link>
      </div>
      <ul className='hidden md:flex'>
        <li className='hover:text-[#FF304F]'>
          <Link to='about' smooth={true}>About</Link>
        </li>
        <li className='hover:text-[#FF304F]'>
          <Link to='experience' smooth={true}>Experience</Link>
        </li>
        <li className='hover:text-[#FF304F]'>
          <Link to='works' smooth={true} offset={-120}>Works</Link>
        </li>
      </ul>
      <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
      </div>
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#002651] flex flex-col justify-center items-center'}>
        <li className='py-8 text-4xl'>
          <Link to='about' smooth={true} onClick={handleClick}>About</Link>
        </li>
        <li className='py-8 text-4xl'>
          <Link to='experience' smooth={true} onClick={handleClick}>Experience</Link>
        </li>
        <li className='py-8 text-4xl'>
          <Link to='works' smooth={true} offset={-120} onClick={handleClick}>Works</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar