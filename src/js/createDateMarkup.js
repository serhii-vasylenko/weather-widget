import dateTpl from '../templates/dateTplt.hbs';

function createDateMarkup(data) {
    console.log(dateTpl(data));
    return dateTpl(data);
  }
  
  export default createDateMarkup;