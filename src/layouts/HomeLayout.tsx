import React from 'react';
import { Header } from '../components';
import { Footer } from '../components/theme/Footer';

export const HomeLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="bg-river">
				<div className="container h-screen overflow-scroll mx-auto md:px-16 px-6 py-6 pb-36">
					{children}
				</div>
			</main>
			<Footer />
		</>
	);
}