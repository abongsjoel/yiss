import React from 'react';

import Logo from '../assets/logo/logo.png';

import Img from '../Atoms/Img';

const Header = (props) => (
    <header className="px-1/10 py-4 flex justify-between items-center">
        <div className="h-auto w-20">
            <Img src={Logo} alt="Logo" />
        </div>
        <svg className="fill-current text-blue-700 hover:text-blue-600" height="32" width="32" ><path d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z"/></svg>
    </header>
)

export default Header;