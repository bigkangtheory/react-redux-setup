import React from 'react';
import Navbar from './Navbar.jsx';

const App = (props) => {
	return (
		<div>
			<Navbar />
			{props.children}
		</div>
	)
}

export default App;