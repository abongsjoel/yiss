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
            <div className="sm:px-1/10 md:flex md:justify-end md:items-center pt-10">
                <div className="hidden md:inline-block md:w-2/5 lg:w-1/2">
                    <img src={bigLogo} alt="YISS" className="h-16 lg:h-20" />
                </div>
                <div className="sm:flex sm:justify-between sm:w-full md:w-3/5 lg:w-1/2">
                    <div className="flex justify-center">
                        <div>
                            <FooterHeader header="Quick Links"/>
                            <ul>
                                <NavItems menu={MENU} styles={itemStyles} />
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center py-8 sm:py-0">
                        <div>
                            <FooterHeader header="Contact Us"/>
                            <ul>{
                                Object.keys(CONTACTINFO)
                                    .map(contact => {
                                        return (
                                            <li className="flex items-center md:pb-2" key={contact}>
                                                <img src={CONTACTINFO[contact]} alt="" className="h-3 pr-1"/>
                                                <p className={itemStyles}>{contact}</p>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <FooterHeader header="Address"/>
                            <ul>
                                <li className={itemStyles +" md:pb-2"}>Biyem Assi</li>
                                <li className={itemStyles +" md:pb-2"}>Yaounde</li>
                                <li className={itemStyles +" md:pb-2"}>Cameroon</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-1/10 md:mt-8">
                <div className="flex justify-center w-full md:hidden py-8">
                    <img src={bigLogo} alt="YISS" className="h-20" />
                </div>
                <hr className="md:mt-0" />
                <p className="w-full flex justify-center text-xs text-gray-500 my-2">Copyright (c) 2020 - YISS</p>
            </div>
        </footer>
    );
}


export default Footer;