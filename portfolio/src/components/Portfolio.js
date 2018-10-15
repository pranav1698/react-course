import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => {
    return <div>
            <h1>My Work</h1>
            <p>Checkout the following things I've done</p>
            <NavLink to="/portfolio/1" activeClassName="is-active">Item 1</NavLink>
            <NavLink to="/portfolio/2" activeClassName="is-active">Item 2</NavLink>
        </div>
}

export default PortfolioPage