
import './css/clone.css';
import Header from './Header';
import CreateNote from './CreateNote'
import Note from './Note'
import { useState } from 'react';

function Clone() {
  const [item,setItem]=useState([])
  let cnote=(p)=>{
  setItem((pre)=>{
return [...pre,p]
  })
  }

  let deleteItem=(id)=>{
    setItem((preItems)=>{
      return preItems.filter((arr,ind)=>{
       return ind!==id
      })

    })
  }
  
  
  return (
    <div className="container">
      <Header/>
      <CreateNote eve={cnote}/>
      <div className="note">
      {item.map((v,ind)=>{
return( <Note value={v.txt} key={ind} delete={deleteItem} id={ind}/>)

  })}
      </div>
    </div>
  );
}

export default Clone;
