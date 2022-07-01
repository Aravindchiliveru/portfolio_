import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.png'
import img2 from '../../assets/portfolio2.png'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/portfolio4.png'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.png'
const data = [
    {
        id: 1,
        image: img1,
        title: 'E-Commerce App',
        github: 'https://github.com/Aravindchiliveru/ecommerceapp',
        demo: 'https://e-commerce-app-aravindchiliveru.vercel.app/'

    },
    {
        id: 2,
        image: img2,
        title: 'Hotel Booking App',
        github: 'https://github.com/Aravindchiliveru/airbnb',
        demo: 'https://airbnb-nine-peach.vercel.app/'

    },
    {
        id: 3,
        image: img3,
        title: 'CommuNITy-Talks',
        github: 'https://github.com/Aravindchiliveru/communitytalks',
        demo: 'https://community-talks.infinityfreeapp.com/home.php'

    },
    {
        id: 4,
        image: img4,
        title: 'Super Mario Game',
        github: 'https://github.com/Aravindchiliveru/mariogame',
        demo: 'https://github.com/Aravindchiliveru/mariogame'

    },
    {
        id: 5,
        image: img5,
        title: 'Introduction to 3js(Portfolio)',
        github: 'https://github.com/Aravindchiliveru/portfolio',
        demo: 'https://portfolio-seven-rose-33.vercel.app/'

    },
    {
        id: 6,
        image: img6,
        title: 'NITMz-QB',
        github: 'https://github.com/Aravindchiliveru/nitmzqb',
        demo: 'http://ajs-nitmz-questionbank.epizy.com/HOME.html'

    },
]
const Portfolio = () => {
    return (
        <section id='Portfolio'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                        <a href={github} className='btn' target='_blank'>Github</a>
                        <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Portfolio