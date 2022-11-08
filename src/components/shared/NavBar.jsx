import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './Navbar.css'

 const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" style={{paddingLeft:'2rem'}}>
       
          <Navbar.Brand href="#home">Todo</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/assigntask'}>Assign-Task</Link>
            <Link className='nav-link' to={'/todos'}>Todos</Link>
          </Nav>
        
      </Navbar>
    );
};

export default NavBar;