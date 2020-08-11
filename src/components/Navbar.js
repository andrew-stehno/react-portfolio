import React from "react";
import classes from "./Navbar.module.css";

const navbar = () => {
  return (
    <div className={classes.Nav}>
      <h1 className={classes.NavigationText}>Andrew Stehno</h1>
      <nav className={classes.NavLinks}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1FgA8RNcyV-B5uYWL0tm5fRTi93I_Qc7WCawcyMGZut0/edit?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
