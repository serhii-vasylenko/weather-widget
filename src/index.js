import fetchWeather from './js/fetchWeather';
import createWidgetMarkup from './js/createWidgetMarkup';
import getRefs from './js/getRefs';



const  refs = getRefs();

navigator.geolocation.getCurrentPosition(success, error);

function success(pos) {
  console.log(pos.coords);
  fetchWeather(pos.coords).then(data => {refs.widget.innerHTML = createWidgetMarkup(data);
    refs.widget.lastElementChild.addEventListener('click', () => console.log('Click'));});
}

function error() {
  const def = {longitude: 30.5167, latitude: 50.4333}
  fetchWeather(def).then(data => {refs.widget.innerHTML = createWidgetMarkup(data);
    refs.widget.lastElementChild.addEventListener('click', () => console.log('Click'));});
}