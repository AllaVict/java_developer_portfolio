import "./headerStyle.css";
import React, { useState } from 'react';
import MobileNav from "./MobileNav";
import ToggleDarkMode from "./ToggleDarkMode";

function Header() {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
         <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <header className="header">
             <nav className="nav-wrapper">
                <div className="nav-content">
                    <a href="" className="logo"> Portfolio </a>

                    <ul>
                        <li><a href="#home" className="menu-item"> Home </a> </li>
                        <li><a href="#about" className="menu-item"> About </a></li>
                        <li><a href="#portfolio" className="menu-item"> Portfolio </a></li>
                        <li><a href="#experience" className="menu-item">  {/* Skills<span>&</span> */} Experience </a> </li>
                        <li><a href="#contact" className="menu-item"> Contact<span>Me</span> </a></li>
                    </ul>
                   <ToggleDarkMode />

                    <div className="menu-btn" onClick={toggleMenu}  >
                        <i className={openMenu ? "bx bx-x" : "bx bx-menu"}></i>
                    </div>

                </div>
            </nav>
        </header>
        </>
    );
}

export default Header;