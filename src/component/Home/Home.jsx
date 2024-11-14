import React from 'react'
import './Home.scss'
const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="content">
          <div className="text_content">
            <h2>Discover <span>Fresh</span>ness Beyond<span>  Imagination</span>  </h2>
            <p>Fruitwala is your online destination for a vibrant assortment of fresh fruits, crisp vegetables, and premium dry fruits. Our commitment is to deliver quality and freshness to your doorstep, ensuring a wholesome and delightful shopping experience.</p>
            <button>Get Started</button>
          </div>
          <div className="img_area">
            <img className='img1' src="" alt="" />
            {/* <img className='img2' src="https://th.bing.com/th/id/R.e6abeb7fc3d710b3f3f1d0fe91fad43f?rik=mPOhnMZYGKyt5A&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f315-3154437_dried-fruit-transparent-background.png&ehk=%2fJ4trYplQ0YwXvHzppcBN46bnSOpFqObaSeBo4oa944%3d&risl=&pid=ImgRaw&r=0" alt="" /> */}
            <img className='img3' src="https://i.ibb.co/j3hnwPw/png-clipart-dried-fruits-dry-fruits-food-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
