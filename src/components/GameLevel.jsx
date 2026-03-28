// GameLevel.jsx

import React from 'react';

const GameLevel = () => {
    const levels = [
        "Level 1: Introduction to numbers",
        "Level 2: Simple addition",
        "Level 3: Simple subtraction",
        "Level 4: Multiplication basics",
        "Level 5: Division basics",
        "Level 6: Fractions introduction",
        "Level 7: Basic geometry and shapes",
    ];

    return (
        <div>
            <h1>Game Levels for Grades 1-7</h1>
            <ul>
                {levels.map((level, index) => (
                    <li key={index}>{level}</li>
                ))}
            </ul>
        </div>
    );
};

export default GameLevel;