const loadQuots = () => {
  fetch('https://api.kanye.rest/')
  .then(response => response.json())
  .then(data => displayQuote(data))
}

const displayQuote = (quote) => {
  const quoteEliment = document.getElementById('quote');
  quoteEliment.innerHTML = quote.quote
}