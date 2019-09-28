import React from 'react';

// State funcional component
const NavBar = ({ totalCounters }) => {
  console.log('NavBar - Render');
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#" navigable='#'>
        Navbar{" "}
        < span className='badge badge-pill badge-secondary'>{totalCounters}</span>
      </a>
    </nav >

  );
}

export default NavBar;
