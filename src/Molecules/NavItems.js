import React from 'react';

const NavItems = ({menu, styles}) => { 
    const menuItems = Object.keys(menu)
        .map(menuElement => {
            return (
                <li key={menuElement} className="list-none ">
                    <a 
                        href={menu[menuElement]}
                        className={styles +" block hover:text-sec-100 focus:outline-none"}
                    >
                        {menuElement}
                    </a>
                </li>
            );
        });

        return menuItems;
}
    


export default NavItems;