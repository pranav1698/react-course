import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return <header>
        <h1>Portfolio</h1>
        <NavLink exact={true} to="/" activeClassName="is-active">Home</NavLink>
        <NavLink exact={true} to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>  
    </header>
}

export default Header;