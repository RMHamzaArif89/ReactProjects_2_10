import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { RiGitRepositoryFill } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { SlUserFollowing } from "react-icons/sl";
import axios from 'axios'
import './profinder.css'

function ProFinder() {
    let [data,setData]=useState()
    let[val,setValue]=useState('')
    let[name,setName]=useState('rmhamzaarif89')

    

    let fetchData=async()=>{
        let res= await axios.get(`https://api.github.com/users/${name}`)
        setData(res.data)
        
        
    }
    
    
    let SearchUser=()=>{
        
        setName(val)
        
    
    
    }

   
    useEffect(()=>{
        fetchData()
        
    },[name])
   
  return (
  data &&  <>
    <div className='profinder'>
    <div className="search-con">
        <input type="text" className="pro-search" placeholder='EnterName'value={val} onChange={(e)=>{setValue(e.target.value)}}/>
        <div className="pro-btn"onClick={SearchUser}><IoSearchOutline/></div>
    </div>
    <div className="pro-card">
        <img src={data.avatar_url} alt="" className="pro-img" />
        <div className="pro-name">{data.login}</div>
        <div className="pro-repo">Repos:{data.public_repos} <RiGitRepositoryFill/></div>
        <div className="pro-followers">Followers:{data.followers}<RiUserFollowLine/></div>
        <div className="pro-following">Following:{data.following} <SlUserFollowing/> </div>
        <div className="date">Joined at: {data.created_at}</div>
        <div className="date">Updated at: {data.updated_at}</div>
         <a href={data.html_url} className="link-btn" target='_black'>GotoGithub</a>
    </div>
      
    </div>
  </>
    
  )
}

export default ProFinder
