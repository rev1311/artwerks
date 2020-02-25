import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './Routes';

export class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="bottom" expand="md" variant="dark" bg="dark">
                    <Container>
                        <Router>
                            <Navbar.Brand href="/Main"><img src="../../public/assets/logo1.png" /></Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Router>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Nav
