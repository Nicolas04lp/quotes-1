// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import quotes from "./quotes.json"

const QuoteBox = () =>{
  let index = Math.floor(Math.random()* 102);
  const[quote, setQuote] = useState(quotes.quotes[index].quote);
  const[author, setAuthor]= useState(quotes.quotes[index].author);
  
  const results = () => {
    let indexTwo = Math.floor(Math.random()* 102);
    setQuote(quotes.quotes[indexTwo].quote)
    setAuthor(quotes.quotes[indexTwo].author)
  }

  return (
    <div className="QuoteBox">
      <h2>"{quote}"</h2>
      <p>{author}</p>  
      {/* <button onClick={results}>NEW Quote</button> */}
      <div className="btns">
          <div>
          <input type="button" value="New Quote" onClick={results}></input>
          </div>
          <div>
          <a href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`} className="tweet" target="_blank" rel="noopener noreferrer">Tweet</a>
          </div>
      </div>
    </div>
  )

};
function App() {
  return (
    <div className="App">
      <h1>Selecione una frase celebre</h1>
      <QuoteBox/>
    </div>
  );
}

export default App;

