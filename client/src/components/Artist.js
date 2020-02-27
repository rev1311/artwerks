import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import seeds from '../mainseeds.json';


class Artist extends Component {
    state = {
        id: 0,
        seeds
    }
    componentDidMount () {
        const { handle } = this.props.match.params
        const { id } = this.props.location.state

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={2}>
                        <div>
                        </div>                        
                    </Col>
                    <Col md={8}>
                        <div className="artist">
                            <p>Name: {this.props.seeds.id}</p>
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
