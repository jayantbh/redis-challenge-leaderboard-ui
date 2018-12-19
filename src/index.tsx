import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as ReduxProvider } from 'react-redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import registerServiceWorker from 'registerServiceWorker';

import rootReducer from 'reducers';
import sagas from 'sagas';
import './index.scss';
import App from 'App';

const isNotProd = process.env.NODE_ENV !== 'production';

// Middlewares
export const saga = createSagaMiddleware();

let middlewares = [saga];

// Conditional Middlewares
middlewares = isNotProd ? [reduxImmutableStateInvariant(), ...middlewares] : middlewares;


export const store = createStore(
	rootReducer,
	composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

sagas.map(saga.run);

ReactDOM.render(
	<ReduxProvider store={store}>
		<App />
	</ReduxProvider>
	, document.getElementById('root'));
registerServiceWorker();
