import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from "../Assets/Logo.png";


// This is the Navigation bar with some custom inline CSS
function Nav() {

    const navStyle = {
        color: 'black'
    };

    return (
        <nav>
            <img src={logo} alt="logo"/>
            <ul className="nav-links"> 
                <Link style={navStyle} to="/">
                    <li> Home</li>
                </Link>
                <Link style={navStyle} to="/SongsList"> 
                    <li> Songs List</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;