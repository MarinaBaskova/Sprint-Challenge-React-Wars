import React from 'react';
import Character from './Character'


const CharacterList = (props) => {
    console.log(props)
    return (
        <div className="character-list">
            {props.characterList.map((char) =>
                <Character
                    key={char.name}
                    name={char.name}
                    height={char.height}
                    mass={char.mass}
                    skinColor={char.skin_color}
                    hairColor={char.hair_color}
                />
            )}
        </div>
    )



}

export default CharacterList;