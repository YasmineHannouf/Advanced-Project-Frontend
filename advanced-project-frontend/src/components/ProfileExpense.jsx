import React from 'react';
import '../styles/ProfileExpense.css';

function InfoCard() {
  return (
    <div className="infocardContainer">
      <div id="main">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Dog_coat_variation.png" alt="dog coat variation"></img>
      </div>
      <div id="textbois">
        <h2>Emil Alicic</h2>
        <h4>Professional Memeologist</h4>
        <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a>
        <div id="hotlinks">
          <a href="https://codepen.io/LIMESTA" target="_blank" rel="noopener noreferrer">
            <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" alt="codepen.io"></img>
          </a>
          <a href="https://codepen.io/LIMESTA" target="_blank" rel="noopener noreferrer">
            <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" alt="codepen.io"></img>
          </a>
          <a href="https://codepen.io/LIMESTA" target="_blank" rel="noopener noreferrer">
            <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" alt="codepen.io"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;