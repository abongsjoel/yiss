import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({link, exact, menuItem, styles, clicked}) => { 
    let linkStyle = "inline md:block hover:text-sec-100 focus:outline-none pb-2 hover:border-b-2 hover:border-sec-100";
    // if(active) {
    //     linkStyle += " text-sec-100 font-bold border-b-2 border-sec-100";
    // }
    return (
        <li className={styles +" list-none"} >
            <NavLink 
                to={link}
                exact={exact}
                className={linkStyle}
                onClick={clicked}
            >
                {menuItem}
            </NavLink>
        </li>
    );
}
    


export default NavItem;