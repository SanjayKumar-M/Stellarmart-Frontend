import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@material-ui/core';
import '../Styles/Products.css';

const Products = () => {
  const url = "https://fakestoreapi.com/products";

  const [items, setItems] = useState([]);

  const fetchProduct = () => {
    axios.get(url)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Box sx={{ flexGrow: 0}}>
      <div className="product-container">
        {items.map((product) => (
          <div className="product-item" key={product.id}>
            <img className="product-image" alt="product-img" src={product.image} />
            <p >{product.description}</p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Products;
