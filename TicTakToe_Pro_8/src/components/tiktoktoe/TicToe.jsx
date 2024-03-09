import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { GiTicTacToe } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa";
import './tictoe.css'
import { useState } from 'react';

function TicToe() {
    let[xTurn,setXturn]=useState(false)
    let [value,setValue]=useState(Array(9).fill(''))
    let changState=(e)=>{


        let takevalues=[...value]
        if(takevalues[e]) {return}
        takevalues[e]=xTurn?'x':'0';
        


        setXturn(!xTurn)
    
        setValue(takevalues)

        // console.log(value)
      

    
    }

  return (
    <div className='tictoe'>
        <div className="heading">Play the Game <GiTicTacToe/> </div>
      <div className="con">

        <div  className="con-box" onClick={()=>{ changState(0)}}>{value[0]}</div>
        <div  className="con-box" onClick={()=>{ changState(1)}}>{value[1]}</div>
        <div  className="con-box" onClick={()=>{ changState(2)}}>{ value[2]}</div>
        <div  className="con-box" onClick={()=>{ changState(3)}}>{ value[3]}</div>
        <div  className="con-box" onClick={()=>{ changState(4)}}>{ value[4]}</div>
        <div  className="con-box" onClick={()=>{ changState(5)}}>{ value[5]}</div>
        <div  className="con-box" onClick={()=>{ changState(6)}}>{ value[6]}</div>
        <div  className="con-box" onClick={()=>{ changState(7)}}>{ value[7]}</div>
        <div  className="con-box" onClick={()=>{ changState(8)}}>{ value[8]}</div>
   
      </div>

      <div className="refresh-btn">Refresh</div>
    </div>
  )
}

export default TicToe
