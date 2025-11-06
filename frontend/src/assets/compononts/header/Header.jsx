import React from 'react';
import '../../../index.css';

function Header() {
  return (
    <header>
      <nav id="navbar">
        <div className="container nav-content">
          <div className="logo">Yaschilal Adane Tiruneh</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
