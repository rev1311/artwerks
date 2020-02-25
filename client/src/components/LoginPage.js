import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LoginPage.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Routes';



export class LoginPage extends Component {
    render() {
        return (
            <Container>
                <Routes />
                <Row>
                    <Col md={12}>
                        <div className="loginwindow">
                            <img src="" alt="ArtWerkS Logo" />

                        <div className="form__group field loginwindow">
                            <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" className="form__label">username</label>
                        </div>
                        <div className="form__group field loginwindow">
                            <input type="password" className="form__field" placeholder="Password" name="password" id='password' required />
                            <label for="password" className="form__label">password</label>
                        </div>
                        <div>
                            <Router>
                            <Link to="./Main">Join</Link>
                            </Router>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LoginPage;


