import weather, { getWeather }  from "./weather";
import { load, save, remove } from './storage';

const WEATHER_KEY = "weaterObject";
addWeather()

export async function addWeather() {
  try {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
    const response = await getWeather();
    const data = await response.data;
    const createMarkup = `<li class = "weather">
    <div class="weather__block"><span class="weather__number">${Math.round(data.main.temp)}&#176;</span>
      <div class = "weather__location"><h2 class="weather__title">${data.weather[0].main}</h2>
      <p class="weather__city"><svg class="weather__svg" width="16" height="16">
      <use href="/symbol-defs.33050382.svg#icon-carbon_location-filled"></use>
    </svg>${data.name}</p></div></div>
      <img class="weather__icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
      <p class="weather__date">${new Date(data.dt*1000).toLocaleDateString('en-GB', options)}</p></li>`
        
      save(WEATHER_KEY, createMarkup);
          // return weatherForm.insertAdjacentHTML('afterbegin', createMarkup);  
  } catch (error) {
    console.error(error);
  }
}

//  addWeather();


