import React from 'react'
import CV from '../../assets/Chiliveru_Aravind_resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Have a talk</a>
    </div>
  )
}

export default CTA