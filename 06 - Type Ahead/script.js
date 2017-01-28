console.log('in script');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches (wordToMach, cities) {
  return cities.filter(place => {
  // regex med flagga global och case insinsitive
    const regEx = new RegExp(wordToMach, 'gi');
    return place.city.match(regEx) || place.state.match(regEx);
  });
}
function displayMatches () {
  console.log(this.value);
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

// fortsätt från 11:52min
