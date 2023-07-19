function carrito({carrito}) {
    return carrito.length ? (  
        <div>
            <ul>
                {carrito?.map((producto) => <li key={producto.id}>{producto.name} * {producto.quantity}
                 ${producto.totalPrice.toFixed(2)}</li>)}
            </ul>
        </div>
    ) : null;
}
export default carrito;