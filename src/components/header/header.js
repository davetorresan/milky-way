import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './header.css'

const Header = () => {

    return(
        <div className="header">
            <div className="header-container">
                <div className="logo">Milky Way</div> 
                <nav className="nav">
                    <ul>
                        <Link to="about"><li>About project</li></Link>
                        <Link to="blog"><li>Blog project</li></Link>
                        <Link to="team"><li>Meet the team</li></Link>
                        
                    </ul>
                </nav>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        </div>
    )
}

export default Header;
