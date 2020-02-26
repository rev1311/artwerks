import React, { Component } from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';

export class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="bottom" expand="md" variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand href="/LoginPage"><Image src="/assets/logo2.png" /></Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Nav
