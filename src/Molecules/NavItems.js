import React from 'react';
import { NavLink } from 'react-router-dom';

import NavItem from './NavItem';
import Aux from '../hoc/Auxilary';

const NavItems = ({ styles, clicked}) => (
    <Aux>
        <NavItem link='/about-us' menuItem="About Us" styles={styles} clicked={clicked} />
        <NavItem link='/our-communities' menuItem="Our Communities" styles={styles} clicked={clicked} />
        <NavItem link='/blog' menuItem="Blog" styles={styles} clicked={clicked} />
    </Aux>
)


export default NavItems;