import React from 'react';
import { Header } from '../components';

export const BaseLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="container mx-auto px-8">
				{children}
			</main>
		</>
	);
}