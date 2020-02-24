import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './LoginPage.scss';



export class LoginPage extends Component {
    render() {
        return (
            <Container>
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
                            <Link to="/Main"><Button variant="dark">Join</Button></Link>
                            <Link to="/Main"><Button variant="dark">Log In</Button></Link>
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


