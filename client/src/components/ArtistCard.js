import React, { Component } from 'react';
import mainseeds from '../mainseeds.json';
import { Card } from 'react-bootstrap';

class ArtistCard extends Component {
    state = {
        id: 0,
        name: "",
        img: "",
        alt: "",
        title: "",
        desc: "",
        mainseeds
    }

    render() {
        const artworks = [...this.state.mainseeds];
        artworks.sort(() => Math.random() - 0.5);

        return (
            artworks.map(art => {
                return (
            <div>
            
                <Card className="bg-dark text-white" key={art.id}>
                    <Card.Img src={art.img} alt={art.alt} />
                    <Card.ImgOverlay>
                    <Card.Text>{art.title}</Card.Text>
                    <Card.Title>Artist: {art.name}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                
            </div>
        )
    }));
}
};

export default ArtistCard;
