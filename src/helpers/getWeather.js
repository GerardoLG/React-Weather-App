export const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
    city
  )}&appid=5be534d75afe350256ad6e98433c520a&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  const { main, weather, wind } = data;

  const currentWeather = {
    feels_like: main.feels_like,
    temp: main.temp,
    description: weather[0].description,
    icon: weather[0].icon,
    speed: wind.speed,
  };

  return currentWeather;
};
