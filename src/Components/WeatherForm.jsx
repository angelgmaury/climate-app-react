import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export function WeatherForm({ getWeather }) {
  return (
    <form onSubmit={getWeather} className="containForm mb-4 mt-4">
      <div className="flex containInput ">
        <FontAwesomeIcon icon={faLocationDot} fontSize={28} />
        <input
          type="text"
          name="city"
          placeholder="Your City Name"
          className="placeholder:text-[#ccc] placeholder:text-lg placeholder:capitalize outline-none uppercase ml-2 text-xl bg-transparent"
          autoFocus
          autoComplete="off"
        />
      </div>

      <button className="bg-cyan-50 rounded-full w-10 h-10 flex items-center justify-center transition-all hover:bg-cyan-200">
        <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={20} />
      </button>
    </form>
  );
}