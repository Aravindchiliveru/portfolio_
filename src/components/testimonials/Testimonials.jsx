import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
    {
        avatar : AVTR1,
        names:'Arishma - Web Developer',
        review:'Aravind is a cool,open-minded fellow being with an immense expertise in building and developing web application. Working with him indeed gave me a lot of experience and guidance as well. The only thing needed for doing any kind of work is focus. This man completely works with focus and often amazes me with his exceptional reasoning behind any scenario. Most of his hours lasts in his work probably because the way he thinks about work. Work is Interesting!! Shocking? Told he amazes!!'
    },
    {
        avatar : AVTR2,
        names:'Vamshi - Web Developer',
        review:'When I first met Aravind for work actualy, it was probably one of the inspiring days I went through. He is so dedicated, calm and a perfect stragetist towards work. He has his own way of understanding and expaining things by breaking them down to fellowmates which is an important tool for having any enterprise hands on to work with. The guidance he provides immensely helps to learn a lot. Having him in any work deed is a cup of a tea.'
    },
    {
        avatar : AVTR3,
        names:'Kriti - Software Engineer',
        review:'Aravind is wonderful to work with, and has exceptional expertise in content writing, forward thinking and innovation. He consistently demonstrates a solid work ethic and a dedication to doing the best on his part. he is self-motivated, methodical, and very capable. He is not only reliable but also an inspiring team player. His appreciable workflow, skills, ingenuity, and comprehension of change requests makes work easier and fluent. He has an amazing positive attitude towards work.'
    },
    {
        avatar : AVTR4,
        names:'Arun - Senior Electrical Analyst',
        review:'Aravind has an excellent skill. He is a smart worker and can handle any situation easily and has excellent leadership qualities and also has managerial qualities too. Glad that I have worked with him and gained experience. People go bursted to learn new dev tools but one main thing about him is he loves to learn and implement new techs and new strategies which gradually elevates performance of any institution. A good deed for any being :) '
    },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from Clients and Co-mates</h5>
        <h2>Testimonials</h2>
        <Swiper spaceBetween={50} pagination={true} modules={[Pagination]} className="mySwiper container testimonials__container">
            {
                data.map(({avatar, names, review}) => {
                    return (<SwiperSlide className="testimonials">
                    <div className="client__avatar">
                        <img src={avatar} alt={names} />
                    </div>
                        <h5 className="client__name">{names}</h5>
                        <small className="client__review">
                            {review}
                        </small>
                </SwiperSlide>)
                })
            }
            
        </Swiper>
    </section>
  )
}

export default Testimonials