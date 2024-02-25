import React from 'react'
import './css/card.css'


function Card(props) {
    return (

        <div className="card">
            <img src={props.img} alt="" className="img" />
            <div className="text">
                <div className="h1">{props.heading}</div>
                <div className="price">{props.price}</div>
                <div className="txt">{props.txt}</div>
            </div>
        </div>

    )
}

export default Card