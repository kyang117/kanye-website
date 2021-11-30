import { useState } from 'react';
import { quoteList } from './quoteList.js';
import './App.css'

function App() {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState(false);

  function handleNextClick() {
    setIndex(index < quoteList.length - 1 ? index + 1 : 1);
  }

  let quote = quoteList[index];
  return (
    <>
      
      <h1 className = "header">Let's get some Kanye Quotes!</h1>
      
      <p style={{
        textAlign:'center'
      }}>
        <img
          src='https://kanye-app-solutions.vercel.app/static/media/kanye-west-kanye.39657b72.gif'
          alt='Kanye West gif'
          style={{
            width:'630px',
            height:'360px',
            borderRadius: '3%'
          }}
        />
      </p>
      
      <p style={{
        textAlign:'center'
      }}>
        <button 
          className="click"
          onClick={handleNextClick}>
          Generate Quote
        </button>
      </p>

      <p 
        className="newQuote"
        style={{
        textAlign:'center'
      }}>
        <i className="no-italics"> {quote.quote} </i>
      </p>
    
    </>
  );
}

export default App;
