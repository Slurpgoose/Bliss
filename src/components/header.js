import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';

let Header = () => {
    return (
    <header className="App-header">
        <div className="nav-bar">
            <ul>
                <NavLink className={'topLink'} to="/home">Home</NavLink>
                <NavLink className={'topLink'} to="/fonts">Fonts</NavLink>
                <NavLink className={'topLink'} to="/main">Color</NavLink>
            </ul>
        </div>
    </header>)
}

export default Header;