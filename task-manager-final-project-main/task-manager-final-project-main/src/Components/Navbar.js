import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

/**
 * Navigation Component
 * 
 * This component provides the main navigation for the Task Management Application.
 * It uses React Bootstrap for styling and React Router for navigation.
 * 
 * Features:
 * - Responsive navigation bar
 * - Bootstrap styling
 * - Active link highlighting
 * - Mobile-friendly design
 */
export default function Navbar() {
  return (
    <BootstrapNavbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        {/* Brand/Logo */}
        <BootstrapNavbar.Brand as={Link} to="/">
          📋 Task Manager
        </BootstrapNavbar.Brand>
        
        {/* Mobile menu toggle */}
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Navigation links */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Home/Dashboard link */}
            <Nav.Link as={Link} to="/" className="mx-2">
              🏠 Home
            </Nav.Link>
            
            {/* Tasks management link */}
            <Nav.Link as={Link} to="/tasks" className="mx-2">
              ✅ Tasks
            </Nav.Link>
            
            {/* About page link */}
            <Nav.Link as={Link} to="/about" className="mx-2">
              ℹ️ About
            </Nav.Link>
            
            {/* Contact page link */}
            <Nav.Link as={Link} to="/contact" className="mx-2">
              📞 Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
