const CountrySelector = require('./models/country_selector.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countrySelector = new CountrySelector();
  countrySelector.getData();
  countrySelector.bindEvents();

  const selectElement = document.querySelector('#countries');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const countryContainer = document.querySelector('#country');
  const resultView = new ResultView(countryContainer);
  resultView.bindEvents();
  
});
