import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css'; //For tailwindcss
import App from './App';
import * as serviceWorker from './serviceWorker';

import './fonts/neo-latina-demo-FFP.ttf';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
