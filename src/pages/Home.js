import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"
import pizzaImage from "../assets/pizza.jpeg"

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${pizzaImage})`}}>
      <div className='headerContainer' >
          <h1>GP's Pizzeria</h1>
          <p>Pizza To Fit Any Taste</p>
          <Link to='/menu'>
            <button>ORDER NOW</button>
          </Link>
      </div>
      
    </div>
  )
}

export default Home