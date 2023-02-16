import createWidgetMarkup from './createWidgetMarkup';
import getRefs from './getRefs';

const refs = getRefs();

function renderWidgetMarkup(data) {
  refs.widget.innerHTML = createWidgetMarkup(data);  
}

export default renderWidgetMarkup;
