import React from 'react';

import mailIcon from '../assets/icons/mail.png';
import phoneIcon from '../assets/icons/phone.png';
import bigLogo from '../assets/logo/big-logo.png';

import FooterHeader from '../Molecules/FooterHeader';
import NavItems from '../Molecules/NavItems';

const MENU = {
    "About Us": '/about-us', 
    "Our Values": '/our-values',
    "Our Communities": '/our-communities'
}

const CONTACTINFO = {
    'info@yiss.com': mailIcon,
    "+(237) 676 796 101": phoneIcon,
    "+(237) 666 452 220": phoneIcon
}

const Footer = () => {
    const itemStyles = "text-xs pb-1 text-gray-800";
    return (
        <footer>
            <div>
                <div className="flex justify-center pt-8">
                    <div>
                        <FooterHeader header="Quick Links"/>
                        <ul>
                            <NavItems menu={MENU} styles={itemStyles} />
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center pt-8">
                    <div>
                        <FooterHeader header="Contact Us"/>
                        <ul>{
                            Object.keys(CONTACTINFO)
                                .map(contact => {
                                    return (
                                        <li className="flex items-center" key={contact}>
                                            <img src={CONTACTINFO[contact]} alt="" className="h-3 pr-1"/>
                                            <p className={itemStyles}>{contact}</p>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center pt-8">
                    <div>
                        <FooterHeader header="Address"/>
                        <ul>
                            <li className={itemStyles}>Biyem Assi</li>
                            <li className={itemStyles}>Yaounde</li>
                            <li className={itemStyles}>Cameroon</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tj-container">
                <img src={bigLogo} alt="YISS" />
                <hr className="my-4" />
                <p className="w-full flex justify-center text-xs text-gray-500">Copyright (c) 2020 - YISS</p>
            </div>
        </footer>
    );
}


export default Footer;