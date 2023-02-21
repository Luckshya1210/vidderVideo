import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utlis/fetchFromAPI'
// import zIndex from '@mui/material/styles/zIndex'

const ChannelDetail = () => {
  const {id}=useParams()
  const [video,setvideo]=useState([])
  const [channelDetail,setchanneld]=useState();
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=>setchanneld(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=>setvideo(data?.items))
  },[id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div
           style={{
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex:10,
            height:'300px'
           }}
           />
           <ChannelCard channelDetail={channelDetail} marginTop='-93px'/>
      </Box>
      <Box sx={{display:'flex',p:'2'}}>
           <Box sx={{mr:{sm:'100px'}}}/> 
            <Videos videos={video}/>
           
      </Box>

    </Box>
  )
}

export default ChannelDetail
