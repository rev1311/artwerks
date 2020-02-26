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
            
                <Card className="bg-dark text-white" key={art.id} style={{ margin: "20px", fontFamily: 'Cinzel', boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .7)" }}>
                    <Card.Img src={art.img} alt={art.alt} />
                    <Card.ImgOverlay>
                    <Card.Title style={{ margin: "-2px" }}>{art.title}</Card.Title>
                    <Card.Text>Artist: {art.name}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                
            </div>
        )
    }));
}
};

export default ArtistCard;
