let apiQuotes = []; //let as the value varies

//show new quote
function newQuote(){
    //to pick a rand quote from api quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]; //# will never be bigger than amount in the array
    console.log(quote);
}

//Get quotes from API
async function getQuotes() {
    const apiUrl = 'quotes.json'; //Normally should be a link to the quotes API, but using local file for longetivity
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
      // Catch Error Here
    }
}  


//on load
getQuotes();