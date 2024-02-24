import React, { useState } from 'react'
import './css/about.css'
import AboutCard from './AboutCard'

function About() {
    let Data = [
        {
            img: 'images/card1.jpg',
            title: 'card1',
            text: 'Some quick example text to build on the card title and make up the bulk of the card'
        },
        {
            img: 'images/card2.jpg',
            title: 'card2',
            text: 'Some quick example text to build on the card title and make up the bulk of the card'
        },
        {
            img: 'images/card3.jpg',
            title: 'card3',
            text: 'Some quick example text to build on the card title and make up the bulk of the card'
        },
    ]
    let [data, SetData] = useState(Data)
    return (
        <div className='about'>
            <div className="about-img">
                <img src="/images/about.jpg" alt="" />
            </div>

            <div className="about-con">
                {data.map((p) => {

                    return (<AboutCard img={p.img} title={p.title} text={p.text} />)
                })}
            </div>
        </div>
    )
}

export default About
