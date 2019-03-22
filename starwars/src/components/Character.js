import React from 'react';

const Character = (props) => {
    return (
        <div className="character-card">
            <h3>Name: {props.name}</h3>
            <h4>Height: {props.height}</h4>
            <h4>Mass: {props.mass}</h4>
            <p>{props.name} has
            {props.hairColor === 'n/a' || props.hairColor === 'none' ? ' no hair color ' : `${props.hairColor} hair color `}
                and {props.skinColor} skin.
            </p>
        </div>

    )
}

export default Character;