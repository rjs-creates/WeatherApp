import React from "react";
import WeatherCard from "./WeatherCard";
import "../index.css";

const weatherArray = [
  { type: "Sunny", day: "Monday", high: "30", low: "11" },
  { type: "Partially Cloudy", day: "Tuesday", high: "25", low: "10" },
  { type: "Overcast", day: "Wednesday", high: "27", low: "15" },
  { type: "Rainy", day: "Thursday", high: "20", low: "10" },
  { type: "Snow", day: "Friday", high: "7", low: "-5" },
];

const App = () => {
  const renderWeather = () => {
    const results = weatherArray.map((eachweather) => {
      let logo = "";

      switch (eachweather.type) {
        case "Sunny":
          logo = "sun";
          break;

        case "Partially Cloudy":
          logo = "cloud";
          break;

        case "Overcast":
          logo = "cloud";
          break;

        case "Rainy":
          logo = "umbrella";
          break;

        case "Snow":
          logo = "snowflake";
          break;

        default:
          logo = "";
          break;
      }

      return (
        <WeatherCard
          logo={logo}
          day={eachweather.day}
          high={eachweather.high}
          low={eachweather.low}
          type={eachweather.type}
        />
      );
    });

    return results;
  };

  return <div className="mainContainer">{renderWeather()}</div>;
};

export default App;
