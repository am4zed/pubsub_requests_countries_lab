const PubSub = require('../helpers/pub_sub.js')

const ResultView =  function (container) {
  this.container = container;
};
ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected-country-ready', (event) => {
    const country = event.detail;
    this.render(country);
  });
};

ResultView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType)
  element.textContent = text;
  return element;
};

ResultView.prototype.render = function (country) {
  this.container.innerHTML = '';

  const countryName = this.createElement('h2', country.name);
  this.container.appendChild(countryName);

  const countryRegion = this.createElement('h3', country.region);
  this.container.appendChild(countryRegion);

  const languageList = this.createLanguageList(country.languages);
  console.log(country.languages);
  this.container.appendChild(languageList);

  const population = this.createElement('p', `Population: ${country.population}`);
  this.container.appendChild(population);

  const countryFlag = document.createElement('img');
  countryFlag.src = country.flag;
  this.container.appendChild(countryFlag);
};

ResultView.prototype.createLanguageList =  function (languages) {
  const list = document.createElement('ul');
  list.textContent = 'Languages: '

  languages.forEach((language)=> {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  });
  return list;
};

module.exports = ResultView;
