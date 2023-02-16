import renderWidgetMarkup from './js/renderWidgetMarkup';
import renderDateMarkup from './js/renderDateMarkup';
import fetchWeather from './js/fetchWeather';

import dayjs from 'dayjs';

// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

const [day, date, month, year] = dayjs(new Date())
  .format('dddd DD MMM YYYY')
  .split(' ');
const dateObj = {
  day,
  date,
  month,
  year,
};

renderDateMarkup(dateObj);

navigator.geolocation.getCurrentPosition(success, error);

function success(pos) {
  console.log(pos.coords);
  fetchWeather(pos.coords).then(renderWidgetMarkup);
}

function error() {
  const def = {longitude: 30.5167, latitude: 50.4333}
  fetchWeather(def).then(renderWidgetMarkup);
}