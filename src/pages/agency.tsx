import React from "react";
import { Head } from "../components";

import "tailwindcss/tailwind.css";

const AgencyPage: React.FC = () => {
  return (
		<>
			<Head title="River Delta | Home" />
			<div className="p-2 w-max bg-gray-200">
				<h1 className="text-5xl filter drop-shadow-md">
					Welcome to River Delta
				</h1>
				<h2 className="text-xl text-gray-800">
					Partnerships for a more equitable future
				</h2>
			</div>
			<div className="flex flex-row-reverse">
				<div className="max-w-xl my-4 p-5 bg-gray-800 bg-opacity-70 text-lg text-white">
					<p>We partner exclusively with non-profits, local governments, and schools providing a robust array of services aimed at helping your organization succeed in the digital world. 

					Local governments and nonprofits are too often overlooked by service design and digital transformation efforts. We work alongside organizations at every step, providing expertise and support for a range of problems. We help identify the best course of action, even if that isn't with us.
					</p>
				</div>
			</div>
			<div className="flex flex-row">
				<div className="max-w-xl my-4 p-5 bg-gray-800 bg-opacity-70 text-lg text-white">
					<p>Our services</p>
					<p>We recognize that too many 
					Our services include: funding opportunity support, user research, digital and service design, and software development.</p>
				</div>
			</div>
			<div className="flex flex-row-reverse">
				<div className="max-w-xl my-4 p-5 bg-gray-800 bg-opacity-70 text-lg text-white">
					<p>Our Zero Profit model</p>
					<p>company, our focus is reducing costs to partners and providing the best service without costily waste and overhead. Community and self-sufficiency drive our partnerships. We look forward to partnering with you to build a better future - a more equitable future.</p>
				</div>
			</div>
			<div className="flex flex-row">
				<div className="max-w-xl my-4 p-5 bg-gray-800 bg-opacity-70 text-lg text-white">
					<p>Our team</p>
					<p>We are a group of women who connected over our shared disappointment in traditional digital consultancies and were dedicated to imagining a meaningful and alternative. </p>
				</div>
			</div>
		</>
  )
}

export default AgencyPage;
