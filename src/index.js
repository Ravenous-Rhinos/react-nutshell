import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Nutshell from './components/Nutshell';
import App from './App'

// import './index.css';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
        <App />
        <Nutshell />
        </div>
    </Router>
    ,document.getElementById('root'));

// registerServiceWorker();
