import React from 'react';

import { 
	BrowserRouter as Router, 
	Route, 
	IndexRoute 
} from 'react-router-dom';

import App from './components/App.jsx';
import LandingPage from './components/LandingPage.jsx';
// import NotLandingPage from './components/NotLandingPage.jsx';
import Tasks from './components/Tasks.jsx';
import Completed from './components/Completed.jsx';
import Login from './components/Login.jsx';

const RouteHandler = () => {
	return (
	<Router>
		<div>
			<App>
				<Route exact={true} path="/" component={LandingPage} />
				<Route path="/login" component={Login} />
				<Route path="/tasks" component={Tasks} />
				<Route path="/completed" component={Completed} />
			</App>
		</div>
	</Router>
	)
}

export default RouteHandler;