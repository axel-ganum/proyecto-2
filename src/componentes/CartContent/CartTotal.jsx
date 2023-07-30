import { useContext } from "react";
import { dataContext } from "../DataContext";

const CartTotal = () => {
    const {cart} = useContext (dataContext);

    const total = cart.reduce((acc, el) => acc + el.price,0);
     
  return (
    <div className="cartTotal" >
        <h3 className="total">The total to pay: $ {total} </h3>
        </div>
  )
}

export default CartTotal;