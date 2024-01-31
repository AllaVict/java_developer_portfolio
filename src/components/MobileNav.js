import "./MobileNavStyle.css";
import React from 'react';

const MobileNav = ({ isOpen, toggleMenu }) => {

    return (
        <>
              <div className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu} >
                <div className="mobile-menu-container">

                    <ul>
                        <li><a href="#home" className="menu-item"> Home </a> </li>
                        <li><a href="#about" className="menu-item"> About </a></li>
                        <li><a href="#portfolio" className="menu-item"> Portfolio </a></li>
                        <li><a href="#experience" className="menu-item">  {/* Skills<span>&</span> */} Experience </a> </li>
                        <li><a href="#contact" className="menu-item"> Contact<span>Me</span> </a></li>
                    </ul>

                </div>
            </div>
        </>
    );
}

export default MobileNav;