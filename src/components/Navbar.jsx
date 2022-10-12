import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {


    return (
    <div className='navbar'>
        <Link to={'/'}>
        <div className="logo">
            <h1>Quotes</h1>
        </div>
        </Link>

        <div className="nav-links">
            <Link to={"/quotes"}>
                <p>My Quotes</p>
            </Link>
            <Link to={"/addquote"}>
                <p>Add Quotes</p>
            </Link>
            <Link to={"/"}>
                <p>Log Out</p>
            </Link>

        </div>
    </div>
    )
}

export default Navbar