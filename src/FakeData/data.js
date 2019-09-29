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

export function getData() {
	return data;
}

export function userDetails() {
	return userDetail;
}
