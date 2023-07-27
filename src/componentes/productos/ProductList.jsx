import React, {useContext, useEffect, useState } from 'react';
import { dataContext } from '../DataContext';
import "./product.css";
import banner from '../Banner/Banner';





 const Products = () => {
   
   const{data, cart, setCart} = useContext(dataContext); 
   const [list, setList] = useState({
    data: [],
    isLoading: true,
    error: null,
  });



  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setList(prev => ({ ...prev, data, isLoading: false })))
      .catch(error => setList(prev => ({ ...prev, isLoading: false, error: 'Error fetching data' })));
  }, []);

   
  
  const buyProduct = (product) => {
    setCart([...cart, product]);
    
  };
  if (list.isLoading) return <div><h2>Loading...</h2></div>;
  if (list.error) return <div><h2>{list.error}</h2></div>;

  
  return  data.map((product)=> {

    return (
    
      <header  className='header'>
    <div className='productos'>
      <div className='card' key={product.id} >
          <h3>{product.title}</h3>
          <img className='imgs' src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => buyProduct(product)}>Buy</button>
        
      </div>
      </div>
    </header>
  
    )
  })
  
};
export default Products;









































