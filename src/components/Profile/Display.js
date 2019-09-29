import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthHook } from '../../hooks/authHook';

function Display() {
	const [ userData, setUserData ] = useState();

	// const data = useAuthHook();

	// useEffect(() => {
	// 	// setUserData({ ...userData, data });
	// }, []);

	return (
		<div className="h-screen w-full">
			<section className="">
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
				<div className="px-3 py-4">
					<ul class="flex">
						<li class="mr-6">Height</li>
						<li class="mr-6">Weight</li>
						<li class="mr-6">Dominate Hand</li>
					</ul>
				</div>
			</section>
			<section className="mt-4 pt-4 flex flex-row justify-around">
				<h1 className="text-2xl">
					97% <br />
					<span>Handling</span>
				</h1>
				<h1> Best Skill by peers, averaged together</h1>
			</section>
			<section className="mt-3 pt-6">
				<h1 className="text-center">Review section</h1>
				<table>
					<thead>
						<tr className="pl-2">Reviewer name:1</tr>
					</thead>
					<tbody>
						<tbody>
							<tr className="">
								<td className="pl-2"> Handling</td>
								<td className="pl-2">99%</td>
								<td className="pl-2">Dunking</td>
								<td className="pl-2">30%</td>
								<td className="pl-2"> Defense</td>
								<td className="pl-2">99%</td>
							</tr>
							<tr>
								<td className="pl-2">Rebound</td>
								<td className="pl-2">30%</td>
								<td className="pl-2"> Passing</td>
								<td className="pl-2">99%</td>
								<td className="pl-2">Shooting</td>
								<td className="pl-2">30%</td>
							</tr>
						</tbody>
					</tbody>
				</table>
			</section>
		</div>
	);
}

export default Display;
