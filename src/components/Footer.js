import images from '../assets/images';

const gitAccounts = [
	{
		name: 'AGoravskiy',
		url: 'https://github.com/AGoravskiy'
	},
	{
		name: 'nAzdAc',
		url: 'https://github.com/nAzdAc'
	},
	{
		name: 'Nickolay-Kr',
		url: 'https://github.com/Nicolay-kr'
	},
	{
		name: 'ShvetsBy',
		url: 'https://github.com/ShvetsBy'
	}
];

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="rs">
				<a className="rs__link" target="_blank" rel="noopener noreferrer" href="https://rs.school/react/">
					<img className="rs__link-img" src={images.rs} alt="rs" />
				</a>
			</div>
			<p className="year">2021</p>
			<div className="developers">
				{gitAccounts.map((acc) => (
					<a className="github" target="_blank" key={acc.url} rel="noopener noreferrer" href={acc.url}>
						{acc.name}
					</a>
				))}
			</div>
		</footer>
	);
};
