import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import seeds from '../mainseeds.json';


class Artist extends Component {
    state = {
        id: this.props.id,
        seeds
    }
    componentDidMount () {
        const { handle } = this.props.match.params
        const { id } = this.props.location.state

        fetch(``)

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
                            <h1 style={{ color: "#fff" }}>Artist test {this.state.id}</h1>
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
