import React from "react";

const WeatherInfo = ({ data }) => {
  // als er geen data is dan laten we gewoon niks zien
  if (!data) {
    return null;
  }

  // hier maken we de link voor het weer-plaatje
  const plaatje = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  return (
    <div>
      <h2>{data.name}</h2>

      <img 
        src={plaatje}
        alt={data.weather[0].description}
      />

      <p>Het is: {data.main.temp} °C</p>
      <p>Het voelt als: {data.main.feels_like} °C</p>
      <p>Luchtvochtigheid: {data.main.humidity} %</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherInfo;
