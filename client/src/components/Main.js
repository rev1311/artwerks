import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ArtistCard from './ArtistCard';


export class Main extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <div>
                            <ArtistCard />
                            
                        </div>                        
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Main
