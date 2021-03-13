import Content from '../components/Content';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Main = () => {
	return (
		<div className="Main">
			<Header />
			<Content />
			<Footer />
		</div>
	);
};
