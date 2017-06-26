import store from '../store.js'

const loginAction = (credentials) => {
	console.log('credentials', credentials)
	// return {
	// 	type: "LOGIN",
	// 	credentials: credentials
	// }
	// FIRE AJAX CALL CHECKING BACKEND FOR LOGING credentials
	//ONSUCESS CALL LOGIN(TRUE)
	// console.log(store);
		store.dispatch(logIn(true));
	// ON FAIL CALL LOGIN(FALSE)
}

const logIn = (value)=>{
	return {
		type: "LOGIN",
		payload: value
	}
}

export default loginAction;