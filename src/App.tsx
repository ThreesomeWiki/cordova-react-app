import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducres from './reducer';
import MainScreen from './page/tab/MainScreen';
import './app.scss';
import 'antd-mobile/dist/antd-mobile.css';

const store = createStore(reducres, applyMiddleware(thunk, logger));

const Router = () => {
    return (
        <HashRouter>
            <Route exact path="/" component={MainScreen} />
        </HashRouter>
    );
};

export default function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
