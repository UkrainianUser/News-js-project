import weather, { getWeather }  from "./weather";

const weatherForm = document.querySelector('.weather');

 async function addWeather() {
  try {
    const response = await getWeather();
    const data = await response.data;
    const createMarkup = `
    <div class="weather__block"><span class="weather__number">${Math.round(data.main.temp)}&#176;</span>
      <div class = "weather__location"><h2 class="weather__title">${data.weather[0].main}</h2>
      <p class="weather__city"><svg class="weather__svg" width="16" height="16">
      <use href="/symbol-defs.33050382.svg#icon-carbon_location-filled"></use>
    </svg>${data.name}</p></div></div>
      <img class="weather__icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
      <p class="weather__date">${new Date(data.dt*1000).toDateString()}</p>`
      

    return weatherForm.insertAdjacentHTML('afterbegin', createMarkup);
  
  } catch (error) {
    console.error(error);
  }
 }

 addWeather();


