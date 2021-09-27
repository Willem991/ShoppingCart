import React from "react";
import { Link } from "react-router-dom";
import './Component.css';
import Logo from './Images/LogoNew.png';

const Navbar = () => {

    return(
        <div id='Navbar'>
            <img id='Logo' src={Logo}/>
            <ul>
                <Link to='/'>
                    <li className='Navlist' key='LI01'>Homepage</li>
                </Link>
                <Link to='/Products'>
                    <li className='Navlist' key='LI02'>Products</li>
                </Link> 
            </ul>
            <Link id='Cart' to ='/Cart'>
                <div>Cart</div>
            </Link>
        </div>
    );
};

export default Navbar;