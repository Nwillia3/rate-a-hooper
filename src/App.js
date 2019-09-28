import React, { useEffect, useState } from 'react';
import './App.css';
import './tailwind.css';
import firebase from 'firebase';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Navbar from './components/navbar';
// import useAuthHook from './hooks/authHook';
// import { useProfile } from './hooks/authHook';

function App() {
	const google = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider);
	};

	return (
		<div>
			<Router>
				<Navbar />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/login" component={Login} />
			</Router>
			<div>
				<button className="" onClick={() => google()}>
					google login
				</button>
			</div>
		</div>
	);
}

export default App;
