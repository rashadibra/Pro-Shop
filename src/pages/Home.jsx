import React from 'react';
import ProductCard from "../components/ProductCard";
function Home() {
  return (
    <div className="">
  <div className='row m-0 g-5'>
      {
        [1,2].map((item,index)=>(
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 '>
              <ProductCard key={index}/>
              </div>
        ))
      }
     
  </div>
    </div>
  )
}

export default Home