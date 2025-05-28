import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
  const navItemStyle = {
    backgroundColor: '#8B4513',
    borderRadius: '20px',
    padding: '8px 20px',
    color: '#FFE6C7',
    margin: '0 5px',
    textDecoration: 'none'
  };

  const activeStyle = {
    ...navItemStyle,
    backgroundColor: '#6B4F4F'
  };

  return (
    <Nav 
      className="p-3" 
      style={{ 
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '10px',
        margin: '20px',
        marginLeft: '100px'
      }}
    >
      <Nav.Link 
        href="#home" 
        style={activeStyle}
      >
        Home
      </Nav.Link>
      <Nav.Link 
        href="#modul" 
        style={navItemStyle}
      >
        Modul
      </Nav.Link>
      <Nav.Link 
        href="#latihan" 
        style={navItemStyle}
      >
        Latihan
      </Nav.Link>
      <Nav.Link 
        href="#klasifikasi-gambar" 
        style={navItemStyle}
      >
        Klasifikasi Gambar
      </Nav.Link>
    </Nav>
  );
};

export default Navbar;