import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { appStore } from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import { fromEventPattern } from 'rxjs';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    rootElement);
