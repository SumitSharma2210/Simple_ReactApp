import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//this code depicts inline css inside javascript react course
const customStyle = {
  color: "red",
  fontSize: "20 px",
};

/* the working of the render method:
ReactDOM.render(What to show, where to show it);
*/

//inline css can also be used in the following way:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 style={customStyle}> Hello World! </h1>

    <h1 style={{ color: "blue" }}>This is written in blue! </h1>
  </div>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
