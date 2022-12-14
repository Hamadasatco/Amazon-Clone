import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
// import * as servieWorker from './serviceWorker';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "@fortawesome/fontawesome-free";
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

//import reportWebVitals from './reportWebVitals';
import "./css/Header.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
          <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
