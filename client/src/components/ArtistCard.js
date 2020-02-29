import React, { Component } from 'react';
import speedseeds from '../speedseeds.json';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ArtistCard extends Component {
    state = {
        id: 0,
        name: "",
        img: "",
        alt: "",
        title: "",
        desc: "",
        speedseeds
    }

    render() {
        const artworks = [...this.state.speedseeds];
        artworks.sort(() => Math.random() - 0.5);

        return (
            artworks.map(art => {
                return (
            <div>
                <Link to={ "/Artist/" + art.id }>
                <Card className="bg-dark text-white" key={art.id} style={{ margin: "20px", fontFamily: 'Cinzel', boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .7)" }}>
                    <Card.Img src={art.img} alt={art.alt} style={{  }} />
                    <Card.ImgOverlay>
                    <Card.Title style={{ margin: "-2px" }}>{art.title}</Card.Title>
                    <Card.Title>Artist: {art.name}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                </Link>
                
            </div>
        )
    }));
}
};

export default ArtistCard;
