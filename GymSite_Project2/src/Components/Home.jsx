import React from 'react'
import './css/home.css'

function Home() {
    return (
        <div className='home'>
            <div id="carouselExampleSlidesOnly" className="carousel slide con" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/carousel1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/carousel2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/carousel3.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>

                <div className="home-text">
                    <div className="heading">
                        Welcome to the RM Gym
                    </div>
                    <div className="heading2">
                        We Provide u the best u need
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
