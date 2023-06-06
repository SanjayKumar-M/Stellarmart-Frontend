import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {

  const [item,setItem] = useState([])
  const fetchItems = async () =>{
    return await axios.get("https://fakestoreapi.com/products")
                .then((res)=>{setItem(res.data)})
                .catch((err)=>{console.log(err)})
  }

  useEffect(()=>{fetchItems()},[])
  return (
    <div >
      {item.map((product )=>(
        <img src={product.image} alt='images'/>)
      )}
    </div>
  )
}

export default Products