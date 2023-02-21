import axios from 'axios';
 
const BASE_URL="https://youtube-v31.p.rapidapi.com"
const options = {
    
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':'ddf61146ffmsh6127cdb4f191c73p1795e5jsn140b35be69c7',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options)
    return data
  }