import React from 'react'
import Multiple from "../assets/multiplePizzas.jpeg"
import "../styles/About.css"
import { LoremIpsum } from 'react-lorem-ipsum';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${Multiple})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <LoremIpsum p={2} />
            
        </div>

    </div>
  )
}

export default About