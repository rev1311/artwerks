import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ArtistCard from './ArtistCard';


export class Main extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={3}>
                        <div>
                        </div>                        
                    </Col>
                    <Col md={6}>
                        <div className="artistcard">
                            <ArtistCard />
                        </div>                        
                    </Col>
                    <Col md={3}>
                        <div>
                        </div>                        
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Main;
