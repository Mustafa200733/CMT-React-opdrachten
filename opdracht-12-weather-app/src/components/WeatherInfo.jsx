const WeatherInfo = ({ data }) => {
  if (!data) return;

  return (
    <div>
      <h2>{data.name}</h2>
      <img
        src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        alt={data.weather[0].description}
      />
      <p>Temperatuur: {data.main.temp} °C</p>
      <p>Gevoelstemperatuur: {data.main.feels_like} °C</p>
      <p>Luchtvochtigheid: {data.main.humidity} %</p>
      <p>Windsnelheid: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherInfo;
