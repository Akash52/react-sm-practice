import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import App from './App';
import {store} from './Redux/app/store';
import {Provider} from 'react-redux';
import {ApiProvider} from '@reduxjs/toolkit/query/react';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
