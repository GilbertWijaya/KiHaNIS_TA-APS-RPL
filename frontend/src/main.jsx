/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import store from "./app/store.js";
import axios from "axios";

axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
    
      <App />

    </Provider>

  </StrictMode>,
)
