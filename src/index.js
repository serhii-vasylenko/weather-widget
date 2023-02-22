import renderWidgetMarkup from './js/old/renderWidgetMarkup';
// import renderDateMarkup from './js/renderDateMarkup';
import fetchWeather from './js/fetchWeather';
import createWidgetMarkup from './js/createWidgetMarkup';
import getRefs from './js/getRefs';

// import dayjs from 'dayjs';



const  refs = getRefs();

navigator.geolocation.getCurrentPosition(success, error);

function success(pos) {
  console.log(pos.coords);
  fetchWeather(pos.coords).then(data => refs.widget.innerHTML = createWidgetMarkup(data));
}

function error() {
  const def = {longitude: 30.5167, latitude: 50.4333}
  fetchWeather(def).then(data => refs.widget.innerHTML = createWidgetMarkup(data));
}