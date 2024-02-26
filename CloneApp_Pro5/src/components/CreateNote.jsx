import React, { useState } from 'react'
import './css/createnote.css'

function CreateNote(props) {
  let[val,setVal]=useState([])
  
 const inpEvent=(event)=>{
let txt=event.target.value
setVal((preData)=>{
  return{
    ...preData,
    txt
  }


})

 }

 let create=()=>{
  props.eve(val)
 }
  return (
    <div className='createNot'>
      <form action="">
        <h1>Create Your Note</h1>
        <input type="text" name="inp" onChange={inpEvent} placeholder='Enter Note'/>
        <div className="btn" onClick={create}>+</div>
      </form>
    </div>
  )
}
 
export default CreateNote
