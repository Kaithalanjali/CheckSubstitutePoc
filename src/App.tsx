import { useEffect, useState } from 'react';
import './App.css'
import SimpleSlider from './SimpleSlider/index.tsx'
import ProductCard from './Product/ProductCard.tsx';


function App() {
  const [product, setProduct] = useState();
  const fetchProduct = async() =>{
      try{
          const responseData = await fetch('https://fakestoreapi.com/products/1').then(res=>res.json());
          console.log(responseData)
          setProduct(responseData);
      } catch (error) {
          console.error('Error fetching products:', error);
        }
  };
  useEffect(()=>{ 
    fetchProduct();
  },[]);
  return (
    <>
      <h1>Check Substitutes</h1>
    <div>
    <SimpleSlider />
    </div>
    </>
  )
}

export default App
