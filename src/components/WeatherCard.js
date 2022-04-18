import React from "react";
import "../index.css";

const WeatherCard = ({ day, logo, high, low }) => {
  const myStyle = `${logo} icon huge icons`;

  return (
    <div className="cardContainer">
      <h3>{day}</h3>
      <i className={myStyle} />
      <div className="temp">
        <p>{high}°C</p>
        <p className="right">{low}°C</p>
      </div>
    </div>
  );
};

export default WeatherCard;
