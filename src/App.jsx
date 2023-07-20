import React from 'react';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import ProductList from "./componentes/productList";
import Carrito from './componentes/carrito';


function App() {
 

  return (
    <BrowserRouter>
   <nav>
    <Link to="/">Lista de Productos</Link>
    <Link to="/about">Carrito</Link>
    </nav>
    
    <div>
      <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
    </Routes>

    </div>
    </BrowserRouter>
    
    

  )
}

export default App
