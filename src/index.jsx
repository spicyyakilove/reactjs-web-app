import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
TODO:
Fix react-router not working (/signup)
Add Login
Add styling for Homepage, Login, Signup (Responsive)
*/

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
