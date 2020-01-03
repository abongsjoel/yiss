import React, { useState } from 'react';

import Logo from '../assets/logo/logo.png';

import Img from '../Atoms/Img';

const MENU = ["Home", "About Us", "Our Values", "Our Communities", "Contact Us"]

const Header = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);
    
    const toggleMenu =() => {
        setShowSideMenu(!showSideMenu);
        // console.log("toggleMenu is now "+ showSideMenu);
    }

    let iconStyle = null;
    let menuStyle = null;
    if (showSideMenu) {
        console.log("toggleMenu is "+ showSideMenu);
        iconStyle = "text-sec-100";
        menuStyle = "fixed z-50 w-full h-full left-0 py-4 text-lg px-1/10";
    } else {
        console.log("toggleMenu is "+ showSideMenu);
        iconStyle = "text-main-100";
        menuStyle = "hidden";
    }

    return (
        <header className="fixed top-0 bg-white z-50 w-full px-1/10 md:flex md:justify-between md:items-center">
            <div className="py-4 flex justify-between items-center">
                <div className="h-auto w-20">
                    <Img src={Logo} alt="Logo" />
                </div>
                <div className="md:hidden">
                    <button 
                        type="button" 
                        onClick={toggleMenu}
                        className={iconStyle + " block focus:outline-none"}
                    >
                        <svg className="fill-current h-8 w-8" viewBox="0 0 32 32">
                           {showSideMenu ? <path d="M28.71 4.71l-1.42-1.42L16 14.59 4.71 3.29 3.29 4.71 14.59 16 3.29 27.29l1.42 1.42L16 17.41l11.29 11.3 1.42-1.42L17.41 16l11.3-11.29z"/> :
                            <path d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z"/>}
                        </svg>
                    </button>
                </div>
            </div>
            <div className={menuStyle + " md:pb-0 uppercase bg-white text-main-100 md:text-xs lg:text-sm md:flex"}>
               { MENU.map(menuElement => {
                   return (
                       <button 
                           href="#" 
                           className="block py-2 pl-4 md:pl-8 lg:pl-12 pr-0  hover:text-sec-100 focus:outline-none"
                           key={menuElement}
                       >{menuElement}</button>
                   );
               })}
               
                {/* <a href="#" className="block py-1 px-2 md:px-4 lg:px-6 hover:text-sec-100">Home</a>
                <a href="#" className="block py-1 px-2 md:px-4 lg:px-6 hover:text-sec-100">About Us</a>
                <a href="#" className="block py-1 px-2 md:px-4 lg:px-6 hover:text-sec-100">Our Values</a>
                <a href="#" className="block py-1 px-2 md:px-4 lg:px-6 hover:text-sec-100">Our Communities</a>
                <a href="#" className="block py-1 px-2 md:px-4 lg:px-6 md:pr-0 hover:text-sec-100">Contact Us</a> */}
            </div>
        </header>
    );
}

export default Header;