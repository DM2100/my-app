import React from "react";


export const Navbar = () => {
    const nav = ['HOME', 'BIKES', 'GEAR', 'PARTS', 'TIRES', 'SERVICE-INFO', 'CATALOGUES', 'CONTACT']
    return (
        <div className="Navbar">
          <div className="logo">
            <img src="/img/logo.png" alt="LOGO" />
          </div>
          <ul>
            {nav.map((item) => (
              <li key={item} className={item === 'HOME' ? 'home-item' : ''}>
                {item}
              </li>
            ))}
          </ul>
          <div className="icons">
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-bag"></i>
          </div>
        </div>
      );
}