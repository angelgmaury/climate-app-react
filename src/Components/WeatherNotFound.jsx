import React from "react";
import notFound from "../assets/404.png";

export function WeatherNotFound({ is404 }) {
  return (
    <div className={is404 ? "containNotFound" : "hidden"}>
      <figure className="flex justify-center items-center mt-10">
        <img src={notFound} className="w-2/3" />
      </figure>
      <p className="text-2xl capitalize font-bold mt-8">Not found :/</p>
    </div>
  );
}
