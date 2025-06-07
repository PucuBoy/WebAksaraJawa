import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItemStyle = {
    backgroundColor: '#8B4513',
    borderRadius: '20px',
    padding: '8px 20px',
    color: '#FFE6C7',
    margin: '0 5px',
    textDecoration: 'none',
  };

  const activeStyle = {
    backgroundColor: '#FFF',
    color: '#000',
    fontWeight: 'bold',
  };

  return (
    <Nav
      className="p-3"
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '10px',
        margin: '20px',
        marginLeft: '100px',
      }}
    >
      <Nav.Link
        as={NavLink}
        to="/"
        style={({ isActive }) =>
          isActive ? { ...navItemStyle, ...activeStyle } : navItemStyle
        }
      >
        Beranda
      </Nav.Link>

      <Nav.Link
        as={NavLink}
        to="/modul"
        style={({ isActive }) =>
          isActive ? { ...navItemStyle, ...activeStyle } : navItemStyle
        }
      >
        Modul
      </Nav.Link>

      <Nav.Link
        as={NavLink}
        to="/exercise"
        style={({ isActive }) =>
          isActive ? { ...navItemStyle, ...activeStyle } : navItemStyle
        }
      >
        Latihan
      </Nav.Link>

      <Nav.Link
        as={NavLink}
        to="/klasifikasi"
        style={({ isActive }) =>
          isActive ? { ...navItemStyle, ...activeStyle } : navItemStyle
        }
      >
        Klasifikasi Gambar
      </Nav.Link>
    </Nav>
  );
};

export default Navbar;
