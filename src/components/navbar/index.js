/*

task
create data model for user and profile




*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useAuthHook } from '../../hooks/authHook';

const Navbar = () => {
	const [ toggle, setToggle ] = useState({
		isOpen: false
	});

	const { state: isLoggedIn, user: users } = useAuthHook();
	// console.log(users);

	const { isOpen } = toggle;

	const handleToggle = () => {
		setToggle({ ...toggle, isOpen: !isOpen });
	};

	const handleLogOut = (e) => {
		e.preventDefault();
		firebase.auth().signOut();
	};

	firebase.firestore().collection('user_stats').doc('yrSHghU6PMYcuRAIehNu').get().then((doc) => {
		if (doc.exists) {
			// console.log('Document data:', doc.data());
			let dt = doc.data();
			// console.log(dt);
		} else {
			// doc.data() will be undefined in this case
			console.log('No such document!');
		}
	});

	const displayNav = isOpen ? 'block ' : 'hidden';
	return (
		<header className="bg-gray-800 sm:flex sm:justify-between">
			<div className="flex items-center justify-between px-4 py-3">
				<div>
					<h1 className="text-blue-300"> Rate A Hooper </h1>
				</div>
				<div className="sm:hidden">
					<button
						onClick={() => handleToggle()}
						type="button"
						className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
					>
						<svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
							{isOpen ? (
								<path
									fillRule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								/>
							) : (
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>
			<div className={`${displayNav} px-2 py-2 sm:flex`}>
				<Link to="/" className="block mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-600">
					Home
				</Link>
				<Link
					to="/dashboard"
					className="block mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-600"
				>
					Dashboard
				</Link>
				{isLoggedIn && <button onClick={(e) => handleLogOut(e)}>Login out</button>}
			</div>
		</header>
	);
};

export default Navbar;

/*db.collection().get().then(snapShot => {
	someFunction(snapshot.docs)
})


someFunction(data){
	data.forEach( doc => {
		const item = doc.data()
		item is the document 
	})

	i
}

*/
