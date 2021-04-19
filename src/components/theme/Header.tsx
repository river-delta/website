import React from 'react';
import RiverIcon from '../../assets/icons/river.svg';

export const Header: React.FC = () => {
	const menuItems = [
		{ href: '/about', text: 'About' },
		{ href: '/collective', text: 'Collective' },
		{ href: '/agency', text: 'Agency' },
		{ href: '/labs', text: 'Labs' },
		{ href: '/studio', text: 'Studio' },
		{ href: '/contact', text: 'Contact' },
	];
	return (
		<header className="flex items-center p-2 bg-secondary text-white">
			<div className="flex min-w-max m-2">
				<RiverIcon height="45px" width="40px" fill="#fff" />
				<a className="ml-2 self-center text-2xl" href="/">River Delta</a>
			</div>
			<nav className="flex-grow">
				<ul className="flex justify-end">
					{menuItems.map(item => <li key={item.text} className="flex-none p-1 m-1"><a href={item.href}>{item.text}</a></li>)}
				</ul>
			</nav>
		</header>
	);
}
