import React from 'react';
import { Header } from '../components';
import { Footer } from '../components/theme/Footer';

export const BaseLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="bg-gray-100">
				<div className="container mx-auto md:px-16 px-6 py-6 pb-36">
					{children}
				</div>
			</main>
			<Footer />
		</>
	);
}