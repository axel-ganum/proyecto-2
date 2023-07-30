import { useContext } from "react";
import { dataContext } from "../DataContext";
import "./CartContent.css";


const CartElements = () => {
    const {cart, setCart} = useContext (dataContext);
  
    const borrarCarrito = (id) => {
        setCart((prev) => {
          const newCarrito = prev.filter((product) => product.id !==id );
          
          return newCarrito;
        });
      }; 
    return cart.map((product) => {
        return (

        
            <div className="cartContent" key={product.id}>
             
          <h3>{product.title}</h3>
          <img className='imgs' src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>$ {product.price}</p>
          <button className="button" onClick={() => borrarCarrito(product.id)}>Delete</button>
            </div>
        )
    })

}

export default CartElements