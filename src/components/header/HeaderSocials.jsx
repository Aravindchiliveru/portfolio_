import React from 'react'
import {BsLinkedin,BsInstagram,BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://in.linkedin.com/in/aravind-abhi-2338941b1" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Aravindchiliveru" target='_blank'><BsGithub /></a>
        <a href="https://www.instagram.com/aravind_chiliveru" target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials