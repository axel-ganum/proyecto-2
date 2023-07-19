import React, { useEffect, useState } from 'react';
import './product.css';


function ProductList () {
    const [carrito, updateCarrito] = useState([]);
    const [list, setList] = useState({
    data:[],
    isLoading: true,
    error: null, 
    });
   
    const addCarrito = (product) => {
      updateCarrito((prev) => [...prev, product]);
      console.log(carrito);
    };

   const getTotalCarritoPrice = (cart) => {
    const totalPrice = carrito.reduce((accum, curr) => accum + curr.price,0);
    return totalPrice.toFixed(2);
   }
   const getDerivarCarrito = () => {
    const derivarCarrito = [];
    carrito.forEach((item) => {
     const existeItem = derivarCarrito.find((dItem) => dItem.id ===
     item.id)
     if(existeItem) {
     existeItem.quantity++;
     existeItem.totalPrice += Number(item.price);
    }else{
      derivarCarrito.push({
       id: item.id,
       name: item.title,
       quantity:1,
       totalPrice: Number(item.price),
      })
    }
    })
    return derivarCarrito;
   }
   const borrarCarrito = (index) => {
          updateCarrito((prev) => {
            const newCarrito = [...prev];
            newCarrito.splice(index, 1);
            return newCarrito;
          });
        };
   

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data => setList((prev) => ({...prev, data, isLoading: false})));
    }, []);
     
    if (list.isLoading) return<div><h2>loading...</h2></div>;
    if(list.error) return <div><h2>{list.error}</h2></div>;

 
   
    return (
      <>
      <header className='header'>
        <h1>My tienda</h1>
        <button className='clear' onClick={() => borrarCarrito()}>Borrar</button>
        {carrito.length ? <h2>Product List : {carrito.length}
         total: ${getTotalCarritoPrice()}</h2>
         :
         <p>No hay productos en el carrito</p>
        }
      </header>
      <main className='contenedor'>
      <div className='productos'>  
        {list.data.map(product => (
      <div className='cart' key={product.id} >
          <h3>{product.title}</h3>
          <img className='imgs' src={product.image} alt={product.title} />
          <p>{product.description}</p>
      <div className='carrito'>
          <p>{product.price}</p>
          <button className='btn' onClick={() => addCarrito(product)}>Agregar al carro</button>
      </div>  
      </div>
      ))}
    </div>
    </main>
 </>
  );
};
export default ProductList