import { useState } from 'react';
import firebase from 'firebase';

export function useAuthHook() {
	const [ state, setState ] = useState(false);
	const [ user, setUser ] = useState(null);

	firebase.auth().onAuthStateChanged((user) => {
		// console.log(user);
		// user ? setState({ loggedIn: true, users: user }) : setState({ ...state });
		user ? setState(true) : setState(false);
		if (user) setUser(user);
	});

	return { state, user };
}

export function useProfile() {
	// const user = useAuthHook();
	// console.log(user);
	// if (user != null) {
	// 	user.providerData.forEach(function(profile) {
	// 		console.log('Sign-in provider: ' + profile.providerId);
	// 		console.log('  Provider-specific UID: ' + profile.uid);
	// 		console.log('  Name: ' + profile.displayName);
	// 		console.log('  Email: ' + profile.email);
	// 		console.log('  Photo URL: ' + profile.photoURL);
	// 	});
	// }
	// return user;
}
