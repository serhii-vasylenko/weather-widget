import createDateMarkup from './createDateMarkup';
import getRefs from '../getRefs';

// import dayjs from 'dayjs';

const refs = getRefs();

// const [day, date, month, year] = dayjs(new Date())
//   .format('dddd DD MMM YYYY')
//   .split(' ');
// const dateObj = {
//   day,
//   date,
//   month,
//   year,
// };

function renderDateMarkup(date) {
    refs.date.innerHTML = createDateMarkup(date);
}

export default renderDateMarkup;