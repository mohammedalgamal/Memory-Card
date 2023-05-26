import React, { useState } from 'react';
import "../Styles/Main.css";
import Card from './Card';
import AngolaFlag from "../Images/Angola.png";
import ArgentinaFlag from "../Images/Argentina.png";
import BelgiumFlag from "../Images/Belgium.png";
import CambodiaFlag from "../Images/Cambodia.png";
import CameroonFlag from "../Images/Cameroon.png";
import CanadaFlag from "../Images/Canada.png";
import ChileFlag from "../Images/Chile.png";
import ChinaFlag from "../Images/China.png";
import EgyptFlag from "../Images/Egypt.png";
import SaudiFlag from "../Images/Saudi-arabia.png";
import UKFlag from "../Images/UK.png";
import USFlag from "../Images/US.png";

export default function Main() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [allClicked, setAllClicked] = useState([]);

    const flags = [
        {imageSrc: AngolaFlag, countryName: "Angola"},
        {imageSrc: ArgentinaFlag, countryName: "Argentina"}, 
        {imageSrc: BelgiumFlag, countryName: "Belgium"},
        {imageSrc: CambodiaFlag, countryName: "Cambodia"}, 
        {imageSrc: CameroonFlag, countryName: "Cameroon"},
        {imageSrc: CanadaFlag, countryName: "Canada"},
        {imageSrc: ChileFlag, countryName: "Chile"},
        {imageSrc: ChinaFlag, countryName: "China"},
        {imageSrc: EgyptFlag, countryName: "Egypt"},
        {imageSrc: SaudiFlag, countryName: "KSA"},
        {imageSrc: UKFlag, countryName: "UK"},
        {imageSrc: USFlag, countryName: "US"}
    ];

    const increaseScore = () => {
        setCurrentScore(currentScore + 1);
        if (currentScore >= bestScore) {
            setBestScore(bestScore + 1);
        };
    };

    const resetScore = () => {
        setCurrentScore(0);
    };

    const calculateScore = (justClicked) => {
        if (allClicked.includes(justClicked)) {
            resetScore();
            setAllClicked([]);
        }
        else {
            increaseScore();
            setAllClicked(allClicked.concat(justClicked));
        };
    };

    return (
        <div className="Main">
            <div className="scores">
                    Current Score: {currentScore} | Best Score: {bestScore}
            </div>
            <div className="cards">
                {flags.map((country) => {
                    return (
                        <Card
                            calculateScore={calculateScore}
                            imageSrc={country.imageSrc}
                            countryName={country.countryName}
                        />
                    )
                })}
            </div>
        </div>
    )
}