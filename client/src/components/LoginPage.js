import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './LoginPage.scss';
import { Link } from 'react-router-dom';



export class LoginPage extends Component {
    render() {
        return (
        <Container>
                <Row>
                    <Col sm={8} md={10} lg={10}>
                        <div className="loginwindow">
                            {/* <img src="./assets/logo1.png" alt="ArtWerkS Logo" /> */}

                        <div className="form__group field loginwindow">
                            <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" className="form__label">username</label>
                        </div>
                        <div className="form__group field loginwindow">
                            <input type="password" className="form__field" placeholder="Password" name="password" id='password' required />
                            <label for="password" className="form__label">password</label>
                        </div>
                        <div className="btn">
                            <Link to="/Main"><Button variant="outline-info">Login</Button></Link>
                            <Link to="/Main"><Button variant="outline-info">Join</Button></Link>
                        </div>
                        </div>
                    </Col>
                </Row>
        </Container>
        
        )
    }
}

export default LoginPage;


