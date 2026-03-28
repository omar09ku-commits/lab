import React from 'react';

const Character = ({ name, image, description }) => {
    return (
        <div className="character">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
        </div>
    );
};

export default Character;