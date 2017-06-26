import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import loginAction from '../actions/login-action.js';

class Login extends Component{
	constructor(props) {
		super(props)
		this.state = { username: '', password: ''}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log('handleSubmit')
		this.props.loginAction(this.state)
	}

	render(){
		const {username, password} = this.state
		// console.dir(this.state)
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="username" name="username" value={username} onChange={this.handleChange} />
				<input type="text" placeholder="password" name="password" value={password} onChange={this.handleChange} />
				<input type="submit" value="submit" />
			</form>
		)
	}
}

// const mapDispatchtoProps = (dispatch) => {
// 	return {
// 		login: (credentials) => dispatch(loginAction(credentials));  
// 	}
// }

const mapDispatchtoProps = (dispatch) => {
	return bindActionCreators({
					loginAction
				}, dispatch)  
}

export default connect(null, mapDispatchtoProps)(Login);






