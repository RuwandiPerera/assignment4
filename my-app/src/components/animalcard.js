import React from 'react';

const AnimalCard = ({ animal, handleClick }) => {
  return (
    <div onClick={() => handleClick(animal.name)} className="animal-card">
      <img src={animal.image} alt={animal.name} />
    </div>
  );
};

export default AnimalCard;
