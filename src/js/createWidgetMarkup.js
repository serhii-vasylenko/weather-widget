// import weatherTpl from '../templates/weatherTplt.hbs';
// import Handlebars from 'handlebars';
import dayjs from 'dayjs';
const [day, date, month, year] = dayjs(new Date())
  .format('dddd DD MMM YYYY')
  .split(' ');
const dateObj = {
  day,
  date,
  month,
  year,
};

function createWidgetMarkup({main, weather, name}) {
  return `<div class="weather__header">
  <p class="weather__temp">${Math.round(main.temp)}&#176;</p>
  <div class="weather__wrapper">
    <p class="weather__status">${weather[0].main}</p>
    <p class="weather__location">${name}</p>
  </div>
</div>
<div>
  <img class="wheather__icon" src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].main}">
</div>
<div class="weather__data">
  <p class="weather__date">${day}</p>
  <p class="weather__date">${date} ${month} ${year}</p>
</div>
<button class="weather__btn" type="button">weather for week</button>
`;
}

export default createWidgetMarkup;
