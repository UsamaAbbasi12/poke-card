import React from 'react'
import './Pokecard.css'
const IMG_API = " https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard(props) {

    let imgSrc = `${IMG_API}${props.id}.png`;
    return (
        <div className="Pokecard">
            <h1>{props.name}</h1>
            <img src={imgSrc} alt="img" />
            <div>TYPE: {props.type}</div>
            <div>EXP: {props.exp}</div>
        </div>
    )
}

export default Pokecard
