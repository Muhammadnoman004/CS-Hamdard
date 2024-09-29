import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <section>
            <Navbar expand="lg" className="bg-green-900" data-bs-theme="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#NOC">NOC</Nav.Link>
                            <Nav.Link href="#Academic Calender">Academic Calender</Nav.Link>
                            <Nav.Link href="#Admission List">Admission List</Nav.Link>
                            <Nav.Link href="#Conferences">Conferences</Nav.Link>
                            <Nav.Link href="#Result">Result</Nav.Link>
                            <Nav.Link href="#Campus Life">Campus Life</Nav.Link>
                            <Nav.Link href="#Events">Events</Nav.Link>
                            <Nav.Link href="#Tenders">Tenders</Nav.Link>
                            <Nav.Link href="#Policies">Policies</Nav.Link>
                            <Nav.Link href="#Sports">Sports</Nav.Link>
                            <Nav.Link href="#Careers">Careers</Nav.Link>
                            <Nav.Link href="#NewsLetter">NewsLetter</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
}
