import { createContext } from 'react';

function noop() {}

export const AuthContext = createContext({
	token: null,
	userId: null,
	userName: null,
	login: noop,
	logout: noop,
	uploadAvatar: noop,
	avatar: null,
	isAuthenticated: false
});
