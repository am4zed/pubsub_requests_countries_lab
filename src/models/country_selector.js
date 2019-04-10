const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const CountrySelector = function(){
  this.text = null;
}

CountrySelector.prototype.bindEvents = function (){
  PubSub.subscribe('SelectView:selected', (event)=>{
    const selectedIndex = event.detail;
    this.publishCountryObject(selectedIndex);
  });
};

CountrySelector.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.text = data;
    // console.log(this.text);
    PubSub.publish('Country:all-countries-loaded', this.text);
  });
};

CountrySelector.prototype.publishCountryObject = function (selectedIndex) {
  const selectedCountryObject = this.text[selectedIndex];
  // console.log(selectedCountryObject);
  PubSub.publish('Country:selected-country-ready', selectedCountryObject);
};

module.exports = CountrySelector;
