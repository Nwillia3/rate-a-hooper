import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

const Signup = (props) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: '',
		passwordConfirmation: '',
		error: ''
	});

	const { email, password, passwordConfirmation, error } = formData;

	const formChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		// if (email === '') {
		// 	setFormData({ ...formData, error: 'Please enter a valid email' });
		// }

		if (!formValidation()) {
			setFormData({ ...formData, error: 'Passwords do not match' });
			return;
		}

		firebase.auth().createUserWithEmailAndPassword(email, password).then(
			(authRes) => {
				const userObj = {
					email: authRes.user.email,
					uid: authRes.user.uid
				};
				firebase.firestore().collection('users').doc(email).set(userObj).then(
					() => {
						props.history.push('/dashboard');
					},
					(dbError) => {
						console.log(dbError);
					}
				);
			},
			(authError) => {
				console.log(authError);
			}
		);
	};

	const formValidation = () => {
		return password === passwordConfirmation;
	};

	return (
		<div className="m-auto sm: w-full md:max-w-md ">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => onSubmit(e)}>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
					<input
						onChange={(e) => formChange(e)}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						name="email"
						type="text"
						placeholder="email"
						value={email}
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
					<input
						onChange={(e) => formChange(e)}
						className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						name="password"
						type="password"
						placeholder="******************"
						value={password}
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
					<input
						onChange={(e) => formChange(e)}
						className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						name="passwordConfirmation"
						type="password"
						placeholder="******************"
						value={passwordConfirmation}
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Sign Up
					</button>
					{error ? <p className="text-red-700">{error} </p> : null}
					<Link
						to="/login"
						className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
					>
						Already have an account
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Signup;
