import React from 'react';
import ProductCard from "../components/ProductCard";
import Basket from '../features/card/Basket';
function Home() {
  return (
    <div className="">
  <div className='row m-0 g-5 justify-content-center'>
      {
        [1,2,3,4,5,6,7].map((item,index)=>(
            <div  key={index} className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <ProductCard/>
              </div>
        ))
      }
     
  </div>
  <Basket/>
    </div>
  )
}

export default Home