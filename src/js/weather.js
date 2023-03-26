import axios from "axios";

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const KEY_API = '8263fe3022d7c26abc78442437d890b7';
let lat = 40.711217;
let lon = -74.006889;

function success(pos) {
    const crd = pos.coords;
    
    lat = crd.latitude;
    lon = crd.longitude;
    localStorage.setItem('latitude', lat);
    localStorage.setItem('longitude', lon);
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    localStorage.removeItem('latitude', lat); 
    localStorage.removeItem('longitude', lon);
  };
  
  navigator.geolocation.getCurrentPosition(success, error);
  

   export async function getWeather() {
    try {
    if (success) {
      
        return await axios.get(BASE_URL, {
            params: {
              lat: localStorage.getItem('latitude') || lat,
              lon: localStorage.getItem('longitude') || lon,
              appid: KEY_API,
              units: 'metric',
            },
          }); 
    }
    } catch (error) {
      console.error(error);
    }
  }

