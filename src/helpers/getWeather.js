export const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
    city
  )}&appid=5be534d75afe350256ad6e98433c520a&units=metric`;
  const res = await fetch(url);
  const { main, weather } = await res.json();

  const currentWeather = {
    temp: main.temp,
    feels_like: main.feels_like,
    description: weather[0].description,
  };

  return currentWeather;
};
