import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
import "../styles/Menu.css"
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>

        <div className='menuList'>
            {MenuList.map((menuItem, key) => {
                return (
                <MenuItem 
                key={key} 
                data={menuItem} />
            )})}
        </div>


        <Link to='/cart'>
        <button className='floatBttn'>
          View Cart <i className="fa-sharp fa-solid fa-right-to-bracket"></i>
        </button>
        </Link>
    </div>
  )
}

export default Menu