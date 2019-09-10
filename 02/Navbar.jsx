import React from 'react';

const Navbar = (props) => {
  if (props.navbarDisplay) {
    return (
      <span className="navbar">
        <div className="home">Home</div>
        <div className="about">About</div>
        <div className="contact">Contact</div>
      </span>
    );
  }
  else return (
    <span className="navbar-hidden">
        <div className="home">Home</div>
        <div className="about">About</div>
        <div className="contact">Contact</div>
      </span>
  );
}


export default Navbar;