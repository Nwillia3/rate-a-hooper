import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthHook } from '../../hooks/authHook';
import { reviews } from '../../FakeData/data';

function Display() {
	const [ userReviews, setUserReviews ] = useState(null);
	const [ avg, setAvg ] = useState(null);

	useEffect(() => {
		const data = reviews();
		setUserReviews(data);
	}, []);

	let user = {
		h: 0,
		r: 0,
		s: 0,
		d: 0,
		p: 0,
		de: 0
	};

	if (userReviews)
		userReviews.forEach((x) => {
			console.log(x.Handling);
			user.h += x.Handling;
			user.r += x.Rebounding;
			user.s += x.Shooting;
			user.d += x.Dunking;
			user.p += x.Passing;
			user.de += x.Defense;
		});

	for (let i in users) {
	}

	return (
		<div className="">
			<section className="py-4">
				<div className="flex flex-row justify-around">
					<div>
						<h1 className="text-4xl">NW</h1>
					</div>
					<div>
						<h3 className="pt-2">Uncle Drew</h3>
						<h4 className="pt-2">Brooklyn, NY</h4>
						<h5 className="pt-2 pb-4">Slasher</h5>
						<Link
							to="/editprofile"
							className="p-2 rounded text-white bg-gray-800 hover:bg-gray-500 hover:text-black"
						>
							Edit Profile
						</Link>
					</div>
				</div>
				<div className="flex flex-row pl-12 py-4 ">
					<div className="px-3 py-4">
						<span className="font-bold">180</span>
						<h4>Weight</h4>
					</div>
					<div className="px-3 py-4">
						<span className="font-bold">6'3"</span>
						<h4>Height</h4>
					</div>
					<div className="px-3 py-4">
						<span className="font-bold">Left</span>
						<h4>Dominate Hand</h4>
					</div>
				</div>
			</section>
			<h1 className="max-w-sm m-auto text-lg font-semibold py-2">Latest: Overall Peer Rating</h1>

			<section className="max-w-sm m-auto py-4 flex flex-col rounded overflow-hidden shadow-lg">
				<div className="flex flex-row justify-around py-4">
					<div className="flex flex-row">
						<h1 className="text-lg text-center pt-4 rounded-full h-16 w-16 bg-gray-300">icon</h1>
						<div className="pl-2">
							<h2>Dunking</h2>
							<h2>2.0</h2>
						</div>
					</div>

					<div className="flex flex-row">
						<h1 className="text-lg text-center pt-4 rounded-full h-16 w-16 bg-gray-300">icon</h1>

						<div className="pl-2">
							<h2>Dunking</h2>
							<h2>2.0</h2>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-around py-4">
					<div className="flex flex-row">
						<h1 className="text-lg text-center pt-4 rounded-full h-16 w-16 bg-gray-300">icon</h1>
						<div className="pl-2">
							<h2>Dunking</h2>
							<h2>2.0</h2>
						</div>
					</div>

					<div className="flex flex-row">
						<h1 className="text-lg text-center pt-4 rounded-full h-16 w-16 bg-gray-300">icon</h1>

						<div className="pl-2">
							<h2>Dunking</h2>
							<h2>2.0</h2>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-around py-4">
					<div className="flex flex-row">
						<h1 className="text-lg text-center pt-4 rounded-full h-16 w-16 bg-gray-300">icon</h1>
						<div className="pl-2">
							<h2>Dunking</h2>
							<h2>2.0</h2>
						</div>
					</div>

					<div className="flex flex-row">
						<h1 className="text-lg text-center pt-4 rounded-full h-16 w-16 bg-gray-300">icon</h1>

						<div className="pl-2">
							<h2>Dunking</h2>
							<h2>2.0</h2>
						</div>
					</div>
				</div>
			</section>

			<h1 className=" max-w-sm m-auto text-xl text-center font-semibold mt-4 py-4">Review Section</h1>

			{userReviews &&
				userReviews.map((item) => (
					<section className="m-auto px-6 py-4" key={item.username}>
						<div className="max-w-sm rounded overflow-hidden shadow-lg">
							<div className="px-6 py-4">
								<div className="font-bold text-xl mb-2 text-left">
									{item.username} <span>said</span>
								</div>
								<div className="flex flex-row justify-around">
									<div className="text-gray-700 text-lg">
										<h1 className="">
											Handling <span>{item.Handling}</span>
										</h1>
										<h1>
											Defense <span>{item.Defense}</span>
										</h1>
										<h1>
											Passing <span>{item.Passing}</span>
										</h1>
									</div>
									<div className="text-gray-700 text-lg">
										<h1>
											Shooting <span>{item.Shooting}</span>
										</h1>
										<h1>
											Rebound <span>{item.Rebounding}</span>
										</h1>
										<h1>
											Dunking <span>{item.Dunking}</span>
										</h1>
									</div>
								</div>
							</div>
							<div className="px-6 py-2 text-gray-700 text-base">
								You played together at the <span className="font-semibold">40 park</span>
							</div>
						</div>
					</section>
				))}
		</div>
	);
}

export default Display;
