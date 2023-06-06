import React from 'react'
import axios from 'axios';
const Cart = () => {


  const options = {
    method: 'GET',
    url: 'https://aliexpress-datahub.p.rapidapi.com/item_detail',
    params: {
      itemId: '3256804591426248'
    },
    headers: {
      'X-RapidAPI-Key': '1346969e88msh74ebf3189684698p14f3efjsn3a2de6cb2b4c',
      'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
    }
  };
  
  try {
    const response = axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  return (
    <div>
        
    </div>
  )
}

export default Cart