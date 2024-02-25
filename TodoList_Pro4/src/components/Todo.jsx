import React, { useEffect, useState } from 'react'
import './css/todo.css'


function Todo() {
    const getLocalData=()=>{
        const lists=localStorage.getItem('todoApp')
        if(lists){
          return JSON.parse(lists)
        }else{
          return []
        }
       }
    let [val,setVal]=useState('')
    let [item,setItem]=useState(getLocalData)
    const changeVal=(e)=>{
        const inpValue=e.target.value
        setVal(inpValue)
       
            
    }
    const addValue=()=>{
        if(!val){
            alert('enter the value')
        }else{
            const newData={
                id:new Date().getTime().toString(),
                name:val
            }
            setItem([...item,newData])
            setVal('')
        }
       
    }

    const delFunc=(i)=>{
        const filterData=item.filter((pre)=>{
          return (pre.id!==i)
        })
        setItem(filterData)
       
    }
    // set localstroage value
    useEffect(()=>{
     localStorage.setItem('todoApp',JSON.stringify(item))
    },[item])

  return (
    <div className='main'>
        <div className="con">
            <img src="/images/todo.jpg" alt="" className="img" />
            <div className="heading">TodoApp</div>
           <div className="input">
           <input type="text" name=''maxLength={28} onChange={changeVal}/>
            <div className="inp-btn" onClick={addValue}>+</div>
           </div>
          {item.map((listItem)=>{
            return (<li className='li' key={listItem.id}>{listItem.name} <i className='bi bi-trash3' onClick={()=>{delFunc(listItem.id)}}></i></li>)

          })}
        </div>
      
    </div>
  )
}

export default Todo
