import React, { useState } from 'react';
import drew from '../../img/uncledrew.png';
import { Link } from 'react-router-dom';

function Edit() {
	const [ formData, setForm ] = useState({
		username: '',
		hand: '',
		height: '',
		weight: '',
		attr: '',
		city: '',
		state: '',
		zip: ''
	});
	const { username, hand, weight, attr, city, state, zip, height } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...formData, [name]: value });
	};
	const onSubmit = (e) => {
		e.preventDefault();
		setForm({ username, hand, weight, attr, city, state, zip, height });
		console.log(formData);
	};

	return (
		<section className="max-w-sm ">
			<form className="w-full" onSubmit={onSubmit}>
				<div className="flex flex-wrap pl-4">
					<div className="w-full md:w-1/2 px-3 py-2">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
							Username
						</label>
						<input
							onChange={handleChange}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="text"
							placeholder="Uncle Drew"
							value={username}
							name="username"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3 py-2">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
							Height
						</label>
						<input
							onChange={handleChange}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							type="text"
							placeholder="6&rsquo;3&quot;"
							value={height}
							name="height"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3 py-2">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
							Weight
						</label>
						<input
							onChange={(e) => handleChange(e)}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							placeholder="180"
							type="text"
							value={weight}
							name="weight"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3 py-2">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
							Dominant hand
						</label>
						<input
							onChange={(e) => handleChange(e)}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							type="text"
							placeholder="Left"
							value={hand}
							name="hand"
						/>
					</div>

					<div className="w-full md:w-1/2 px-3">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
							2k Attribute
						</label>
						<input
							onChange={(e) => handleChange(e)}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-city"
							type="text"
							placeholder="Slasher"
							value={attr}
							name="attr"
						/>
					</div>

					<div className="w-full md:w-1/2 px-3">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
							City
						</label>
						<input
							onChange={(e) => handleChange(e)}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-city"
							type="text"
							placeholder="Brooklyn"
							value={city}
							name="city"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
							State
						</label>
						<input
							onChange={(e) => handleChange(e)}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-city"
							type="text"
							placeholder="New York"
							value={state}
							name="state"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
							Zipcode
						</label>
						<input
							onChange={(e) => handleChange(e)}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-zip"
							type="text"
							placeholder="11233"
							value={zip}
							name="zip"
						/>
						<button
							className="bg-gray-500 hover:bg-gray-4`00 text-white font-bold py-2 px-4 my-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign Up
						</button>
					</div>
				</div>
			</form>
		</section>
	);
}

export default Edit;
