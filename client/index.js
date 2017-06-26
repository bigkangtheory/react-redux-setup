import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from './Router.jsx';

import { Provider } from 'react-redux';
import store from './store.js';

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.getElementById('app'))