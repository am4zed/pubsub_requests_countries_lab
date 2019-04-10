const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:all-countries-loaded', (event) => {
    const allCountries = event.detail;
    console.log(allCountries);
    this.populate(allCountries);
  });

  this.element.addEventListener('change', (event)=>{
    const countryIndex = event.target.value;
    PubSub.publish('SelectView:selected', countryIndex);
  });

};
SelectView.prototype.populate = function (countryData) {
  countryData.forEach( (country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });

};

module.exports = SelectView;
