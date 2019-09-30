const data = {
	userId: 'eo3hrfknewfo8enverf',
	Handling: [ 3, 7, 6, 8, 8, 9 ],
	Passing: [ 3, 6, 8, 4, 9, 2 ],
	Rebounding: [ 1, 2, 3, 4, 5 ],
	Defense: [ 9, 8, 7, 6, 4, 3 ]
};

const userDetail = {
	City: 'Brooklyn',
	State: 'New York',
	attribute: 'Slasher',
	height: 75,
	weight: 175,
	dominateHand: 'Right'
};
const review = [
	{
		username: 'Don Dada24',
		Handling: 4,
		Passing: 3.4,
		Rebounding: 2.5,
		Defense: 2.5,
		Shooting: 3.5,
		Dunking: 2
	},
	{
		username: 'Riley Freeman',
		Handling: 3.5,
		Passing: 3,
		Rebounding: 2,
		Defense: 2,
		Shooting: 3,
		Dunking: 1
	},
	{
		username: 'Kotra198',
		Handling: 4,
		Passing: 4,
		Rebounding: 3,
		Defense: 2,
		Shooting: 4,
		Dunking: 2
	}
];
export function getData() {
	return data;
}

export function userDetails() {
	return userDetail;
}

export function reviews() {
	return review;
}
