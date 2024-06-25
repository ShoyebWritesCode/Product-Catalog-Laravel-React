import React from 'react';
import ReactDOM from 'react-dom';
import APP from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.get('http://localhost:80000/sanctum/csrf-cookie', {
  withCredentials: true,
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
