import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Nav = () => {
    const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active': ''}><AiOutlineUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#' ? 'active': ''}><BiBook /></a>
        <a href="#services" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#' ? 'active': ''}><RiServiceLine /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#' ? 'active': ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav