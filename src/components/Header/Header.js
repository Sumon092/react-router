import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Welcome to React Router</h1>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="friends">Friends</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;