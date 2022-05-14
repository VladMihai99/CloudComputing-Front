import React from 'react';

function Header(props) {

    const {title} = props;

    return(
        <header id="Header" className='h-16 bg-blue-700 flex justify-center self-center'>
            <span className='text-black text-bold text-xl'>{title}</span>
        </header>
    );
}

export default Header;