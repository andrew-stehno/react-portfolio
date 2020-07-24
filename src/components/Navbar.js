import React from 'react';
import classes from './Navbar.module.css';

const navbar = () => {
    return (
        <div className={classes.NavBorder}>
            <h1 className={classes.NavigationText}>Andrew Stehno</h1>
            <nav className={classes.NavLinks}>
                <a href="#top">About Me</a> | 
                <a href="#top">Portfolio</a> | 
                <a href="#top">Contact</a> 
            </nav>
        </div>
    );
};

export default navbar;