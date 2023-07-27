import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routing from './route';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './pages/reducer';
// import store from './pages/store';
// import Login from './pages/login'
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(reducer);
root.render(
    <BrowserRouter>
    <Provider store = {store}>
    <Routing />
    </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
