import { useContext } from "react";
import { dataContext } from "../DataContext";
import Products from "../productos/ProductList";
import "./CartContent.css";

const CartElements = () => {
    const {cart} = useContext (dataContext);
    return cart.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
             
          <h3>{product.title}</h3>
          <img className='imgs' src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>{product.price}</p>
            </div>
        )
    })

}

export default CartElements