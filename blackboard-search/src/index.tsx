import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Asegúrate de que este es el archivo donde añadiste las directivas de Tailwind CSS
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
