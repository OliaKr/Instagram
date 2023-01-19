import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './root-cmp';
import { BrowserRouter as Router } from 'react-router-dom'

import './assets/styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
  
);

