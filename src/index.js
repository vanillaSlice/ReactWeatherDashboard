import { createElement } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import '../node_modules/normalize.css/normalize.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import reducers from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(reducers, applyMiddleware(promiseMiddleware));

const RootElement = document.getElementById('root');
const ProviderElement = createElement(Provider, { store }, createElement(App));

render(ProviderElement, RootElement);
registerServiceWorker();
