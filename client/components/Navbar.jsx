import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<ul className="navbar">
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/tasks">Tasks</Link>
				<Link to="/completed">Completed</Link>
			</ul>
		</div>
	)
}

export default Navbar;