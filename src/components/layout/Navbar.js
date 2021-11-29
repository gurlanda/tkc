import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ className }) => {
    return (
        <nav className="navbar is-primary has-shadow">
            <div className="navbar-brand">
                <Link to='/' className='my-auto'>
                    <img src="../../assets/img/tkp-pot.svg" alt="logo" 
                        className='navbar-item image is-64x64 pr-0'/>
                </Link>
                <Link to='/'>
                    <h1 className="navbar-item title is-1 acumin pl-0" style={navbarLogoStyle}>TKC</h1>
                </Link>
            </div>
            <div className="navbar-start">
                <Link to='/' className='navbar-item has-text-weight-bold'>Home</Link>
                <Link to='/about' className="navbar-item has-text-weight-bold">About</Link>
                <Link to='/survey' className='navbar-item has-text-weight-bold'>Survey</Link>
            </div>
        </nav>
    )
};

const navbarLogoStyle = {
    color: 'white'
};

export default Navbar;