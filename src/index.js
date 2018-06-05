/* ES6 polyfill */
import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import './index.css';
import store, { history } from './store';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const MOUNT_NODE = document.getElementById('root')
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        MOUNT_NODE
    )
}

render();
registerServiceWorker();
