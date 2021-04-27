import React, { useState, useEffect, useContext } from 'react';
import images from '../assets/images';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { routes } from '../utils/routes';

export const AuthPage = () => {
	const auth = useContext(AuthContext);
	const message = useMessage();
	const { loading, error, request, clearError } = useHttp();

	const [ form, setForm ] = useState({
		email: '',
		password: '',
		name: ''
	});

	useEffect(
		() => {
			message(error);
			clearError();
		},
		[ error, message, clearError ]
	);

	useEffect(() => {
		window.M.updateTextFields();
	}, []);

	function changeHandler(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	async function registerHandler() {
		try {
			const data = await request(routes.register, 'POST', { ...form });
			message(data.message);
			console.log(data);
		} catch (e) {}
	}

	async function loginHandler() {
		try {
			const data = await request(routes.login, 'POST', { ...form });
			message(data.message);
			console.log(data);
			auth.login(data.token, data.userId, data.name, data.avatarURL);
		} catch (e) {}
	}

	return (
		<div className="form-container">
			<div className="col s6 ">
				<div className="logo">
					<img className="logo-img" src={images.logo} alt="logo" />
				</div>
				<div className="card blue darken-1">
					<div className="card-content white-text">
						<span className="card-title">Authorization</span>
						<div>
							<div className="input-field">
								<input
									placeholder="Enter your email"
									id="email"
									type="text"
									name="email"
									className="yellow-input"
									onChange={changeHandler}
									value={form.email}
								/>
								<label htmlFor="email">Email</label>
							</div>

							<div className="input-field">
								<input
									placeholder="Enter your password"
									id="password"
									type="password"
									name="password"
									className="yellow-input"
									onChange={changeHandler}
									value={form.password}
								/>
								<label htmlFor="password">Password</label>
							</div>

							<div className="input-field">
								<input
									placeholder="Enter your Name"
									id="name"
									type="text"
									name="name"
									className="yellow-input"
									onChange={changeHandler}
									value={form.name}
								/>
								<label htmlFor="name">Name</label>
							</div>
						</div>
					</div>
					<div className="card-action">
						<button
							className="btn yellow darken-4"
							style={{ marginRight: 10 }}
							onClick={loginHandler}
							disabled={loading}
						>
							Sign In
						</button>
						<button className="btn grey lighten-1 black-text" onClick={registerHandler} disabled={loading}>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
