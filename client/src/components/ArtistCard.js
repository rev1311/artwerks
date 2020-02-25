import React, { Component } from 'react';
import artists from '../artists.json';
import { Card } from 'react-bootstrap';

class ArtistCard extends Component {
    state = {
        id: 0,
        name: "",
        img: "",
        title: "",
        desc: "",
        artists
    }

    render() {
        const artworks = [...this.state.artists];

        return (
            artworks.map(art => {
                return (
            <div>
            
                <Card className="bg-dark text-white" key={art.id}>
                    <Card.Img src={art.img} alt={art.alt} />
                    <Card.ImgOverlay>
                    <Card.Title>Title:{art.title}</Card.Title>
                    <Card.Text>
                    Description:{art.desc}
                    </Card.Text>
                    <Card.Text>By Artist:{art.name}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                
            </div>
        )
    }));
}
};

export default ArtistCard;
