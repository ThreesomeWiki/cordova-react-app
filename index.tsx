import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './window';

const renderReactDom = () => ReactDOM.render(<App />, document.querySelector('#app'));

if (window.cordova) {
    document.addEventListener(
        'deviceready',
        () => {
            renderReactDom();
        },
        false
    );
} else {
    renderReactDom();
}
