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
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis officiis esse amet, libero et fugiat pariatur earum molestias illo doloribus, quae aliquid natus minus alias eligendi! Quibusdam cumque impedit labore eos! Similique, tempore!'
    },
    {
        avatar : AVTR2,
        names:'Vamshi - Web Developer',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis officiis esse amet, libero et fugiat pariatur earum molestias illo doloribus, quae aliquid natus minus alias eligendi! Quibusdam cumque impedit labore eos! Similique, tempore!'
    },
    {
        avatar : AVTR3,
        names:'Kriti - Software Engineer',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis officiis esse amet, libero et fugiat pariatur earum molestias illo doloribus, quae aliquid natus minus alias eligendi! Quibusdam cumque impedit labore eos! Similique, tempore!'
    },
    {
        avatar : AVTR4,
        names:'Arun - Senior Electrical Analyst',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis officiis esse amet, libero et fugiat pariatur earum molestias illo doloribus, quae aliquid natus minus alias eligendi! Quibusdam cumque impedit labore eos! Similique, tempore!'
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