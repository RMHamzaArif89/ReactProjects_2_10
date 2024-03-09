import React, { useEffect } from 'react'
import { RxCross1 } from "react-icons/rx";
import { GiTicTacToe } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa";
import './tictoe.css'
import { useState } from 'react';

function TicToe() {
    let[xTurn,setXturn]=useState(true)
    let [value,setValue]=useState(Array(9).fill(''))
    let [status,setStatus]=useState()

    let winner=(value)=>{
    let winning= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        
      ];
      for (let i = 0; i < winning.length; i++) {
        let[x,y,z]= winning[i]

        if(value[x] && 
          value[x] === value[y] &&
          value[x] === value[z]
          
          ){return value[x]}
          
        
      }
      return null
     
    }


    let changState=(e)=>{


        let takevalues=[...value]
        if(winner(takevalues) ||takevalues[e]) {return}
        takevalues[e]=xTurn?'x':'0';
        


        setXturn(!xTurn)
    
        setValue(takevalues)

        // console.log(value)
      

    
    }
    useEffect(()=>{
      // winner()

      if(!winner(value) && value.every(item=>item!=='')){
        setStatus('This is draw! Please try again!')
        
      }else if(winner(value)){
        setStatus(`${winner(value)} is the winner,Congratulations!!!`)
        
      }else{
        setStatus(`next player is ${xTurn?'x':'0'}`)
      }

    },[xTurn,value])


    let refreshFunc=()=>{
         window.location.reload()
    }

  return (
    <div className='tictoe'>
        <div className="heading">Play the Game <GiTicTacToe/> </div>
        <div className="heading" style={{color:winner(value)?'green':'blue'}}>{
          status
        }</div>
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

      <div className="refresh-btn" onClick={refreshFunc}>Refresh</div>
    </div>
  )
}

export default TicToe
