import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

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
//updating firestore settings
// firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
