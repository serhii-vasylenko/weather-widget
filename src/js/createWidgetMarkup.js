import weatherTpl from '../templates/weatherTplt.hbs';
import Handlebars from 'handlebars';

function createWidgetMarkup(data) {
  console.log(weatherTpl(data));
  return weatherTpl(data);
}

export default createWidgetMarkup;

Handlebars.registerHelper('round', function (number) {
    return Math.round(number);
})
