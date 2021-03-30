import React, { useState } from "react";
import AddCity from "./components/AddCity";
import { getWeather } from "./helpers/getWeather";

export const WeatherApp = ({ defaultCity = [] }) => {
  const [city, setCity] = useState(defaultCity);
  console.log(getWeather("San Luis Potosi"));
  return (
    <>
      <h1>Weather App</h1>
      <AddCity setCity={setCity} />
      <hr />
      <ul></ul>
    </>
  );
};
