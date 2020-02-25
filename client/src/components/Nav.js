import React, { Component } from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="bottom" expand="md" variant="dark" bg="dark">
                    <Container>
                        <Router>
                            <Navbar.Brand href="/LoginPage">Login/Signup</Navbar.Brand>
                            <Nav className="mx-auto">
                                <Nav.Link href="/Main"><Image src="../../public/assets/logo1.png" /></Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link href="#">Menu</Nav.Link>
                            </Nav>
                        </Router>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Nav
