import React from 'react';
import classes from './Navbar.module.css';

const navbar = () => {
    return (
        <div className={classes.NavBorder}>
            <h1 className={classes.NavigationText}>Andrew Stehno</h1>
            <nav className={classes.NavLinks}>
                <a href="/">About Me</a> | 
                <a href="/portfolio">Portfolio</a> | 
                <a href="/contact">Contact</a> 
            </nav>
        </div>
    );
};

export default navbar;