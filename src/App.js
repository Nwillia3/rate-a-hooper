import React, { fragment } from 'react';
import './App.css';
import './tailwind.css';
import firebase from 'firebase';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Navbar from './components/navbar';

var firebaseConfig = {
	apiKey: 'AIzaSyBB7MVBW0qUDej_FNdVT0xGH61dLD-LJG0',
	authDomain: 'rate-a-hooper.firebaseapp.com',
	databaseURL: 'https://rate-a-hooper.firebaseio.com',
	projectId: 'rate-a-hooper',
	storageBucket: '',
	messagingSenderId: '9215632718',
	appId: '1:9215632718:web:3479c57a973b820fb4ea1f',
	measurementId: 'G-HG09JTZMH7'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const app = firebase.app();

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
