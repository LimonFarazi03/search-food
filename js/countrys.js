const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => displayCounties(data));
};

loadCountries();

const displayCounties = (countries) => {
  for(const country of countries){
    console.log(country);
  }
};