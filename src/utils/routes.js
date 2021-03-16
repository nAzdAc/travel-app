const origin = 'https://travel-best-app.herokuapp.com';

const getRoute = (trailing) => `${origin}/${trailing}`;

export const routes = {
	register: getRoute('register'),
	login: getRoute('login'),
	rating: getRoute('rating'),
	country: getRoute('/country')
};
