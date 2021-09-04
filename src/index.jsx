import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
TODO:
Add Login
Add styling for Homepage, Login, Signup (Responsive)
Add react-router-dom (Pages)
*/

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
