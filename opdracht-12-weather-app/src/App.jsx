import { useState } from "react";
import WeatherInfo from "./components/WeatherInfo";
import "./App.css";

const App = () => {
  // hier bewaren we de stad die je intypt
  const [city, setCity] = useState("");

  // hier komt het weer dat we ophalen
  const [weather, setWeather] = useState(null);

  // mijn API key om het weer op te vragen
  const apiKey = "d8a317cc158a78de7232b05ad8139eb9";

  // als je op de knop klikt dan vragen we het weer op
  const getWeather = (e) => {
    e.preventDefault();

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then((res) => res.json())
  .then((data) => {
    setWeather(data);
  });

  };

  return (
    <>
      <form className="bg-white" onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Voer een stad in..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          className="text-white inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"
          type="submit"
        >
          Zoek
        </button>
      </form>

      {/* hier laten we het weer zien als we het hebben */}
      <WeatherInfo data={weather} />
    </>
  );
};

export default App;
