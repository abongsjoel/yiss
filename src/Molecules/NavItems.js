import React from 'react';

const NavItems = ({menu, styles}) => { 
    const menuItems = Object.keys(menu)
        .map(menuElement => {
            return (
                <li key={menuElement} className={styles +" list-none"}>
                    <a 
                        href={menu[menuElement]}
                        className="block hover:text-sec-100 focus:outline-none md:pb-2 hover:border-b-2 hover:border-sec-100"
                    >
                        {menuElement}
                    </a>
                </li>
            );
        });

        return menuItems;
}
    


export default NavItems;