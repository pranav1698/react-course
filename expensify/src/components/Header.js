import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return <header>
        <h1>Header</h1>
        <NavLink exact={true} to="/" activeClassName="is-active">Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>  
    </header>
}

export default Header;