import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

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
    <BootstrapNavbar expand="lg" className="py-3">
      <Container fluid>
        {/* Toggle di kiri */}
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="mb-2" />

        {/* Collapse akan muncul di bawah toggle */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto flex-column flex-lg-row"
            style={{
              gap: '10px',
              paddingLeft: '100px' ,
              paddingRight: '100px',              
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
              to="/intro-modul"
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
              to="/klasifikasi-gambar"
              style={({ isActive }) =>
                isActive ? { ...navItemStyle, ...activeStyle } : navItemStyle
              }
            >
              Klasifikasi Gambar
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
