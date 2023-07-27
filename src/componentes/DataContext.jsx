import { createContext,useState,useEffect } from 'react';





export const dataContext = createContext();

const DataProvider = ({children}) => {
     const[data, setData] = useState([]);
     const [cart, setCart] = useState([]);
     useEffect(() => { 
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setData(data))
     .catch(error => console.error('Error fetching data:', error));

}, []);



  return <dataContext.Provider value={{data, cart, setCart}}>{children}</dataContext.Provider>
}
export default DataProvider;