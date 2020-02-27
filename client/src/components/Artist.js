import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export class Artist extends Component {


    render() {
        const artist = [...this.state.mainseeds]
        return (
            <Container>
                <Row>
                    <Col md={2}>
                        <div>
                        </div>                        
                    </Col>
                    <Col md={8}>
                        <div className="artist">
                            <Artist key={artist.id}/>
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

export default Artist;
