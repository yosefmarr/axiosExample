import React, { Component } from 'react';
import axios from 'axios';

class CharacterDetail extends Component
{
    characterId = this.props.match.params.characterId; 

    state = {
        id: '',
        name: '',
        birth_year: '',
        gender: '',
        hair_color: '',
        error: false
    }

    componentDidMount()
    {
        axios.get(`/people/${this.characterId}`)
        .then(response => {
            this.setState({
                id: this.characterId,
                name: response.data.name,
                birth_year: response.data.birth_year,
                gender: response.data.gender,
                hair_color: response.data.hair_color
            });
        })
        .catch(err => {
            this.setState({error: true});
        });
    }

    render()
    {

        let body = <>
                    <p><b>Name: </b>{this.state.name}</p>
                    <p><b>Birth Year: </b>{this.state.birth_year}</p>
                    <p><b>Gender: </b>{this.state.gender}</p>
                    <p><b>Hair Color: </b>{this.state.hair_color}</p>
                </>;
        if(this.state.name === '')
        {
            if(this.state.error)
            {
                body = <h3>Rrror intente mas tarde...</h3>;
            }
            else
            {
                body = <h3>Loading...</h3>
            }
        }
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Starwars Character</h1>
                {body}
            </div>
        );
    }
}

export default CharacterDetail;