import React, { useState } from 'react';
import "../Styles/Main.css";

export default function Main() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const increaseScore = () => {
        setCurrentScore(currentScore + 1);
        if (currentScore >= bestScore) {
            setBestScore(bestScore + 1);
        };
    };

    return (
        <div className="Main">
            <div className="scores">
                    Current Score: {currentScore} | Best Score: {bestScore}
            </div>
        </div>
    )
}