import React from 'react'
import Hero from './Hero'

const Laptop = () => {
    const lap = {
        brandName:'hp probook 430 g2',
        processor:"Intel i5 6th",
        ram:'4gb',
        SSD:'1TB',
        price:50000,
    }
  return (
    <div>
        <h1>This data is coming from Laptop component</h1>
        <h1>{lap.brandName}</h1>
        <h2>{lap.price}</h2>
        {/* <Hero /> */}
    </div>
  )
}

export default Laptop