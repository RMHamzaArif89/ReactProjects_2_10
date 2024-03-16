import React, { useEffect,useRef,useState } from 'react'
import axios from 'axios'




function Header() {
  let[Data,setData]=useState([])
  let [num,setNum]=useState(2)
  let [cat,setCat]=useState([])
  let catRef=useRef()

  let Generate=async()=>{
     await axios.get(`https://opentdb.com/api.php`,{
      params:{
        amount:num,
        category:catRef.current.value
      }
     })
     .then(res=>{setData(res.data.results)})

  
  
 
    
  }





  let FetchCat=async()=>{

   await axios.get(`https://opentdb.com/api_category.php`)
  .then(res2=>{setCat(res2.data.trivia_categories)})
  //  setCat(res2)
    
  }


  useEffect(()=>{
    
    FetchCat()
  },[])
  return (
    <nav className="navbar bg-primary ">
      <div className="container d-flex  flex-column justify-content-around align-items-center  w-50" style={{height:'220px'}}>
        <div className="navbar-brand mb-0 h1">Take The Quiz</div>
        <input type="number" className="form-control" id=""value={num} onChange={(e)=>{setNum(e.target.value)}} placeholder="Enter number of questions" />
        <select className="form-select" aria-label="Default select example"ref={catRef}>
          {/* <option selected>Select the type of quiz</option> */}

          {cat.map((item)=>[
             <option value={item.id} key={item.id} >{item.name}</option>
          ])}
  
        </select>

        <div className="btn btn-danger" onClick={Generate}>Generate</div>
      </div>

    </nav>
  )

}

export default Header
