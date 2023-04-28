import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping"
import "../styles/navbar.css"

const Navbar = ({size,setShow}) => {
  return (
    <nav className='nav_box'>
        <span className='my_shop' onClick={() => setShow(true)}>My Shopping</span>
        <div className='cart' onClick={() => setShow(false)}>
            <span>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{size}</span>
            </span>
        </div>
    </nav>
  )
}

export default Navbar