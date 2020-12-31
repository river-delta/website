import React from 'react';

export const Header: React.FC = () => {
	const menuItems = [
		{ href: '/about', text: 'About' },
		{ href: '/services', text: 'Services' },
		{ href: '/contact', text: 'Contact' },
	];
	return (
		<header className="flex p-2">
			<div className="flex-none min-w-max m-2">
				<span>Logo</span>
				<a className="ml-2" href="/">River Delta</a>
			</div>
			<nav className="flex-grow">
				<ul className="flex justify-end">
					{menuItems.map(item => <li key={item.text} className="flex-none p-1 m-1"><a href={item.href}>{item.text}</a></li>)}
				</ul>
			</nav>
		</header>
	);
}
