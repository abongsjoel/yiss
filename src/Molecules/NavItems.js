import React from 'react';

const NavItems = ({menu, active, styles}) => { 
    let linkStyle = "inline text-main-100 md:block hover:text-sec-100 focus:outline-none pb-2 hover:border-b-2 hover:border-sec-100";
    if(active) {
        linkStyle += " text-sec-100 font-bold border-b-2 border-sec-100";
    }
    const menuItems = Object.keys(menu)
        .map(menuElement => {
            return (
                <li key={menuElement} className={styles +" list-none"}>
                    <a 
                        href={menu[menuElement]}
                        className={linkStyle}
                    >
                        {menuElement}
                    </a>
                </li>
            );
        });

        return menuItems;
}
    


export default NavItems;