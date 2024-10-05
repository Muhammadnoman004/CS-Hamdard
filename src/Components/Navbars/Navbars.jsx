import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hamdardLogo from '../../assets/hamdardLogo.png';

export default function Navbars() {
    return (
        <section>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-white shadow-xl px-4 uppercase font-semibold">
                <Navbar.Brand href="#home"><img src={hamdardLogo} alt="" className='w-14 h-14' /></Navbar.Brand>
                <h2 className='text-green-900 font-bold text-lg'>Hamdard University</h2>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link className='hover:underline underline-offset-8 decoration-2' href="#home">Home</Nav.Link>
                        <Nav.Link className='hover:underline underline-offset-8 decoration-2' href="#about">About</Nav.Link>
                        <NavDropdown className='hover:underline underline-offset-8 decoration-2' title="Academics" id="collapsible-nav-dropdown">
                            <NavDropdown.Item className='capitalize' href="#action/3.1">Faculty of Social Sciences</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='capitalize' href="#action/3.2">Faculty of Computer Sciences</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='capitalize' href="#action/3.3">Faculty of Languages</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='capitalize' href="#action/3.4">Faculty of Basic Sciences</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className='hover:underline underline-offset-8 decoration-2' title="Offices" id="collapsible-nav-dropdown">
                            <NavDropdown.Item className='capitalize' href="#action/3.1">Faculty of Social Sciences</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='capitalize' href="#action/3.2">Faculty of Computer Sciences</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='capitalize' href="#action/3.3">Faculty of Languages</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='capitalize' href="#action/3.4">Faculty of Basic Sciences</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='hover:underline underline-offset-8 decoration-2' href="#admissions">Admissions</Nav.Link>
                        <Nav.Link className='hover:underline underline-offset-8 decoration-2' href="#apply Now">Apply Now</Nav.Link>
                        <Nav.Link className='hover:underline underline-offset-8 decoration-2' href="#Internationalization">Internationalization</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section >
    )
}
