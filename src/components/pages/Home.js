import homeimg from '../../images/homeimg.png'
import React from 'react'

function Home() {
  return(
    <div className="main flex home-content">
      <div className="intro">
        <h1>Create your own color scheme!</h1>
        <p>Find the perfect color palette, or get inspired by the combinations you get here!</p>
      </div>
      <div className="image">
        <img src={homeimg} alt="Some Palettes " />
      </div>
    </div>
  )
}

export default Home;
