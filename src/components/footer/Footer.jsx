import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Aravind Chiliveru</a>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer__socials'>
            <a href="https://www.facebook.com/aravind.abhi.54943"> <FaFacebookF/> </a>
            <a href="https://www.instagram.com/aravind_chiliveru/"> <FiInstagram /> </a>
            <a href="https://in.linkedin.com/in/aravind-abhi-2338941b1"> <BsLinkedin /> </a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Aravind Chiliveru</small>
        </div>
    </footer>
  )
}

export default Footer