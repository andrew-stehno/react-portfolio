import React from "react";
import classes from "./Navbar.module.css";

const navbar = () => {
  return (
    <div>
        <h1 className={classes.NavigationText}>Andrew Stehno</h1>
        <nav className={classes.NavLinks}>
          <a href="/">Home</a> |
          <a href="/about">About</a> |
          <a href="/portfolio">Portfolio</a> |
          <a href="/contact">Contact</a> |
          <a href="https://docs.google.com/document/d/1FgA8RNcyV-B5uYWL0tm5fRTi93I_Qc7WCawcyMGZut0/edit?usp=sharing">
            Resume
          </a>
        </nav>
    </div>
  );
};

export default navbar;
