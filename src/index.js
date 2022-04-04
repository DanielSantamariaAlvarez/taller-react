import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Banner from './components/Banner';

ReactDOM.render(
  <React.StrictMode>
    <Banner/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
