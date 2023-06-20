import React, { useEffect, useState } from "react";

import clear from "../assets/clear.png";

import cloud from "../assets/cloud.png";

import mist from "../assets/mist.png";

import rain from "../assets/rain.png";

import snow from "../assets/snow.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWind, faWater } from "@fortawesome/free-solid-svg-icons";

export function WeatherInfo({
  temperature,
  description,
  humidity,
  windSpeed,
  nubes,
  is404,
}) {
  const [image, setImage] = useState("");

  useEffect(() => {
    switch (nubes) {
      case "Clear":
        setImage(clear);
        break;
      case "Rain":
        setImage(rain);
        break;
      case "Snow":
        setImage(snow);
        break;
      case "Clouds":
        setImage(cloud);
        break;
      case "Mist":
        setImage(mist);
        break;
    }
  });

  return (
    <div className={is404 ? "hidden" : "containInfo"}>
      <div className="flex flex-col items-center">
        <figure>
          <img src={image} className="image" />
        </figure>
        <p className="text-4xl font-bold mt-6">{temperature}°C</p>
        <p className="text-xl font-semibold mt-2 capitalize">{description}</p>
      </div>
      <div className="containInfoHumiditySpeed">
        <div className="pl-4 justify-start flex items-center w-2/4 h-[100px]">
          <FontAwesomeIcon
            icon={faWater}
            fontSize={26}
            className="mr-[10px] mt-[6px]"
          />
          <div>
            <span>{humidity}%</span>
            <p>Humidity</p>
          </div>
        </div>
        <div className="pr-4 justify-end flex items-center w-2/4 h-[100px]">
          <FontAwesomeIcon
            icon={faWind}
            fontSize={26}
            className="mr-[10px] mt-[6px]"
          />
          <div>
            <span>{windSpeed}Km/h</span>
            <p>Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
