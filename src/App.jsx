import { WEATHER_KEY } from "./keys";
import { WeatherForm } from "./Components/WeatherForm";
import { WeatherInfo } from "./Components/WeatherInfo";
import { useEffect, useState } from "react";
import { WeatherNotFound } from "./Components/WeatherNotFound";

export default function App() {
  const [state, setState] = useState({
    temperature: "",
    description: "",
    humidity: "",
    city: "",
    nubes: "",
    windSpeed: "",
    error: null,
  });

  const [is404, setIs404] = useState(false);

  const getWeather = async (e) => {
    e.preventDefault();
    const { city } = e.target.elements;
    const cityValue = city.value;

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${WEATHER_KEY}&units=metric`;

    if (cityValue === "") {
      return;
    }

    const response = await fetch(API_URL);
    const data = await response.json();
    const contain = document.querySelector(".contain");
    if (data.cod === "404") {
      setIs404(true);
      console.log("404");
      contain.style.height = "500px";
      return;
    }

    contain.style.height = "550px";
    setIs404(false);

    setState({
      city: data.name,
      temperature: parseInt(data.main.temp),
      description: data.weather[0].description,
      nubes: data.weather[0].main,
      humidity: data.main.humidity,
      windSpeed: parseInt(data.wind.speed),
      error: null,
    });
  };

  return (
    <>
      <main
        className={`flex w-full h-screen justify-center pt-20 colorDefault`}
      >
        <div className="contain">
          <WeatherForm getWeather={getWeather} />
          <WeatherInfo {...state} is404={is404} />
          <WeatherNotFound is404={is404} />
        </div>
      </main>
    </>
  );
}
