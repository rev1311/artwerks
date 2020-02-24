import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ArtistCard from './ArtistCard';


export class Main extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={2}>
                        <div>
                        </div>                        
                    </Col>
                    <Col md={8}>
                        <div>
                            <ArtistCard />
                        </div>                        
                    </Col>
                    <Col md={2}>
                        <div>
                        </div>                        
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Main
