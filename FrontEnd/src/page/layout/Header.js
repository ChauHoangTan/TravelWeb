import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import './style.scss'
function Header() {
    return ( 
        <>
            <div id='header'>
                <div className='containerLeft'>
                    <img className='logo' src={logo} style={{cursor:"pointer"}}/>
                    <Link className='title' to="/">Home</Link>
                    <Link className='title' to="/search">Search</Link>
                    <Link className='title' to="/blog">Blog</Link>
                    <Link className='title' to="/contact">Contact</Link>
                    <Link className='title' to="/aboutUs">About Us</Link>
                    
                </div>
                <div className='containerRight'>
                    <Link className='title' to="/account">Account</Link>
                </div>
            </div>
        </>
     );
}

export default Header;