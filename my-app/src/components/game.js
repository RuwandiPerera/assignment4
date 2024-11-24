import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';
import animals from '../data/AnimalsDb';

const Game = () => {
  const [targetAnimal, setTargetAnimal] = useState('');
  const [result, setResult] = useState('');
  const [shuffledAnimals, setShuffledAnimals] = useState([]);

  // Function to shuffle the animals
  const shuffleAnimals = () => {
    const shuffled = [...animals].sort(() => Math.random() - 0.5);
    setShuffledAnimals(shuffled);
  };

  // Pick a random animal for the target
  const pickTargetAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setTargetAnimal(animals[randomIndex].name);
  };

  // Handle user clicking on an animal
  const handleAnimalClick = (clickedAnimal) => {
    if (clickedAnimal === targetAnimal) {
      setResult('WIN');
    } else {
      setResult('LOSE');
    }
  };

  // Initialize game state
  useEffect(() => {
    shuffleAnimals();
    pickTargetAnimal();
  }, []);

  return (
    <div className="game">
      <h1>Animal Matching Game</h1>
      <div className="result">
        <h2>Result: {result || 'Play!'}</h2>
      </div>
      <div className="target">
        <h3>Find the Animal: {targetAnimal}</h3>
      </div>
      <div className="animal-grid">
        {shuffledAnimals.map((animal) => (
          <AnimalCard
            key={animal.name}
            animal={animal}
            handleClick={handleAnimalClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
