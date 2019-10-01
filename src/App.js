import React from 'react';
import './App.css';
import './tailwind.css';
// import firebase from 'firebase';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Navbar from './components/navbar';
import Edit from './components/Profile/Edit';
import Display from './components/Profile/Display';

// import useAuthHook from './hooks/authHook';
// import { useProfile } from './hooks/authHook';

function App() {
	// const google = () => {
	// 	const provider = new firebase.auth.GoogleAuthProvider();
	// 	firebase.auth().signInWithPopup(provider);
	// };
	// <div>
	// 			<button className="" onClick={() => google()}>
	// 				google login
	// 			</button>
	// 		</div>

	return (
		<div className="w-full">
			<Router>
				<Navbar />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/profile" component={Display} />
				<Route exact path="/editprofile" component={Edit} />
			</Router>
		</div>
	);
}

export default App;
