import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from '../src/redux/store.js';
import App from './App.jsx';

/* import './index.css' */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="bottom-center" reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>,
);

