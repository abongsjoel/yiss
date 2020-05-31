import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './styles.css'; //For tailwindcss
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';

import './fonts/neo-latina-demo-FFP.ttf';
import './fonts/georgia.ttf';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
