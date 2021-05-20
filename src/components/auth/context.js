import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import superagent from 'superagent';
dotenv.config();

const API = process.env.REACT_APP_API_SERVER;

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
	const [user, setUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const token = cookie.load('auth');
		validateToken(token);
	}, []);

	function validateToken(token) {
		try {
			const user = jwt.decode(token);
			if (user) setLoginState(true, token, user);
		} catch (error) {
			setLoginState(false, null, {});
			console.log(`Token Validation Error ${error.message}`);
		}
	}

	function setLoginState(loggedIn, token, user) {
		cookie.save('auth', token);
		setUser({ user });
		setLoggedIn(loggedIn);
	}

	function setLogoutState(loggedIn, user) {
		cookie.save('auth', null);
		setUser({ user });
		setLoggedIn(loggedIn);
	}

	async function login(username, password) {
		try {
			const response = await superagent
				.post(`${API}/signin`)
				.set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
			validateToken(response.body.token);
		} catch (error) {
			console.error('Signin Error', error.message);
		}
	}

	async function signup(email, username, password, role) {
		try {
			const response = await superagent.post(`${API}/signup`, {
				email,
				username,
				password,
				role,
			});
			validateToken(response.body.token);
			console.log('aaaaaaaaaaaaaaaaa',response);

		} catch (error) {
			console.error('Signup Error', error.message);
		}
	}

	function logout() {
		setLogoutState(false, {});
	}

	const state = {
		loggedIn,
		user,
		setLoggedIn,
		login,
		signup,
		logout,
		setUser,
	};

	return (
		<LoginContext.Provider value={state}>
			{props.children}
		</LoginContext.Provider>
	);
};

export default LoginProvider;