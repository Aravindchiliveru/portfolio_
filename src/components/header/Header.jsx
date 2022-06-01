import React from 'react'
import './header.css'
import CTA from './CTA'
import headerimg from '../../assets/aravindHeaderImg.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Chiliveru Aravind</h1>
            <h5 className="text-light">Full Stack Developer</h5>
            <CTA />
            <HeaderSocials />
            <div className="me">
                <img src={headerimg} alt="" />
            </div>
            <a href="#contact" className='scroll__down'>Scrolldown</a>
        </div>
    </header>
  )
}

export default Header