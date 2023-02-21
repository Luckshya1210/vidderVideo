import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {Search} from "@mui/icons-material"


const SearchBar = () => {
  const [search,setsearch]=useState('')
  const navigate=useNavigate()
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(search){
      navigate(`/search/${search}`)
      setsearch('')
    }
  }
  return (
    <Paper component="form" onSubmit={handlesubmit} sx={{borderRadius:20 ,border:'1px solid #e3e3e3' ,pl:2 ,boxShadow:'none',mr:{sm:5}}}>
      <input className='search-bar' placeholder='Search...' value={search} onChange={(e)=>{setsearch(e.target.value)}} />
      <IconButton type="submit" sx={{p:'10px',color:'red'}}>
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar
