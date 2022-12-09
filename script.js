const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBTN = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");


let apiQuotes = []; //let as the value varies

// Loading Spinner Shown
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
  }
  
  // Remove Loading Spinner
  function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }

//show new quote
function newQuote(){
    loading();
    //to pick a rand quote from api quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]; //# will never be bigger than amount in the array

    //check if author field is blank and replace with 'unknown'

    if(!quote.author){
        authorText.textContent = "unknown";
    } else{
        authorText.textContent = quote.author;
    }

    //check length to determine styling
    if (quote.text.length > 120){
        quoteText.classList.add('long-quote');
    } else{
        quoteText.classList.remove('long-quote');
    }
    //set quote, hide loader
    quoteText.textContent = quote.text;
    complete();
}

//Get quotes from API
async function getQuotes() {
    loading();
    const apiUrl = 'quotes.json'; //Normally should be a link to the quotes API, but using local file for longetivity
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
      // Catch Error Here
    }
}  

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl, '_blank');
  }

//event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBTN.addEventListener('click', tweetQuote);

//on load
getQuotes();