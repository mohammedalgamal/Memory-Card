import React from "react";

export default function Card(props) {
    return (
        <div className="card" onClick={() => {
            props.increaseScore();
        }}>
            <div className="flag">
                <img src={props.imageSrc} alt="flag" className="flagImg"/>
            </div>
            <div className="country">
                {props.countryName}
            </div>
        </div>
    )
}