import React from 'react'

const Hero = () => {
  return (
    
     <main className="hero container">
       <div className="hero-content">
        <h1>Best Shooes You Deserve</h1>
        <p>
            Your feet deserve the Best an we here to help to
            you with our shoes. your Feet the Best here to help y
            ou with our shoes.
        </p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">category</button>
              
        </div>
        <div className="Shooping"> 
        <p> Also Available On</p>
        <div className="brands-icons">
          <img src="/images/amazon.png" alt="amazon-logo"/>
          <img src="/images/flipkart.png" alt="flipkart-logo"/>
        </div>
        </div>
       </div>
       <div className="hero-image"> </div>
       <img src="/images/shoe_image.png" alt="shoe-img"/>
     </main>
  )
}

export default Hero
