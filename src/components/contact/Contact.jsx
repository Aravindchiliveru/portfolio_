import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessageLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_q39sv54', 'template_eej80hi', form.current, 'IkMSPfo_d_MVAQtZu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
  return (
    <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon' />
                    <h4>Email</h4>
                    <h5>abhiflix226@gmail.com</h5>
                    <a href="mailto:sharewitharavindchiliveru@gmail.com">Send a message</a>
                </article>
                <article className="contact__option">
                    <RiMessageLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Aravind Abhi</h5>
                    <a href="https://m.me/aravind.abhi.54943">Send a message</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon' />
                    <h4>Whatsapp</h4>
                    <h5>+916301572612</h5>
                    <a href="https://wa.me/+916301572612">Send a message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="text" name='email' placeholder='Your Email' required />
                <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact