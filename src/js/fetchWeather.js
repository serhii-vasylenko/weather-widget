import axios from 'axios';

async function fetchWeather({ latitude, longitude }) {
    const BASE_URI = 'https://api.openweathermap.org/data/2.5/weather';
    const params = new URLSearchParams({
      appid: '6dc1b7053c25de51813d75c3b9bf900d',
      units: 'metric',
      lat: latitude,
      lon: longitude,
    });
  
    const uri = `${BASE_URI}/?${params}`;
  
    const response = await axios.get(uri);
    console.log(response.data);
    return response.data;
  }

  export default fetchWeather;