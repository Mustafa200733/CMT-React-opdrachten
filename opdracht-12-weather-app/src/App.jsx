import { useState } from "react";
import WeatherInfo from "./components/WeatherInfo";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = "d8a317cc158a78de7232b05ad8139eb9";

  const getWeather = (e) => {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  };

  return (
    <>
      <form className="bg-white"  onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Voer een stad in..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="text-white inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg" type="submit">Zoek</button>
      </form>

      <WeatherInfo data={weather} />
    </>
  );
};

export default App;
