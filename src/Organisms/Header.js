import React, { useState } from 'react';

import Logo from '../assets/logo/logo.png';

import NavItem from '../Molecules/NavItem';
import Img from '../Atoms/Img';
import Backdrop from '../Atoms/Backdrop/Backdrop';

import Aux from '../hoc/Auxilary';

const Header = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);
    
    const toggleMenu =() => {
        setShowSideMenu(!showSideMenu);
    }

    let iconStyle = null;
    let menuStyle = null;
    if (showSideMenu) {
        iconStyle = "text-sec-100";
        menuStyle = "fixed z-50 w-full h-full left-0 py-4 text-lg px-1/10";
    } else {
        iconStyle = "text-main-200";
        menuStyle = "hidden";
    }

    const itemStyles = "py-3 pl-4 md:pl-8 lg:pl-12 pr-0 md:flex md:items-end";

    return (
        <Aux>
            <Backdrop show={showSideMenu} clicked={toggleMenu} />
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
                <nav className={menuStyle + " md:pb-0 uppercase bg-white text-main-300 md:text-xs lg:text-sm md:flex"}>
                    <ul className="md:flex md:pt-2">
                        <NavItem link="/" menuItem="Home" active styles={itemStyles} />
                        <NavItem link='/about-us' menuItem="About Us" styles={itemStyles} />
                        <NavItem link='/our-values' menuItem="Our Values" styles={itemStyles} />
                        <NavItem link='/our-communities' menuItem="Our Communities" styles={itemStyles} />
                        <NavItem link='/contact-us' menuItem="Contact Us" styles={itemStyles} />
                    </ul>
                </nav>
            </header>
        </Aux>
    );
}

export default Header;