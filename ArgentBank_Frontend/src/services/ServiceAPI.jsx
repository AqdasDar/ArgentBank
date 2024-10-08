const url = 'http://127.0.0.1:3001/api/v1';

export async function login(body) {
	try {
		const response = await fetch(`${url}/user/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function signup(body) {
	try {
		const response = await fetch(`${url}/user/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function getProfileUser(token) {
	try {
		const response = await fetch(`${url}/user/profile`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
			body: JSON.stringify({}),
		});
		return await response.json();  // reponse contient le token
	} catch (error) {
		console.log(error);
	}
}

export async function putProfileUser(token, body) {
	try {
		const response = await fetch(`${url}/user/profile`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
			body: JSON.stringify(body),
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}
