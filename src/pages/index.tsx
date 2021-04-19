import React from "react";
import { Head } from "../components";

import "tailwindcss/tailwind.css";

const IndexPage: React.FC = () => {
  return (
		<>
			<Head title="River Delta | Home" />
			<div className="p-3 w-max bg-gray-100 bg-opacity-70">
				<h1 className="text-5xl filter drop-shadow-md text-secondary">
					Welcome to River Delta
				</h1>
				<h2 className="text-2xl text-gray-700">
					Partnerships for a more equitable future
				</h2>
			</div>
			<div className="flex flex-row-reverse">
				<div className="max-w-xl my-4 p-5 bg-gray-800 bg-opacity-70 text-lg text-white">
					<p>River Delta is a collection of four closely related initiatives. Each aims to address a different missing component in traditional approaches for service design and digital transformation.</p>
					<p className="h-4"></p>
					<p>
						<p><a href="/collective" className="text-main hover:text-tertiary">The Collective</a> offers mentorship, peer-to-peer partnership, and personal development</p>
					</p>
					<p className="h-4"></p>
					<p>
						<p><a href="/agency" className="text-main hover:text-tertiary">The Agency</a> collaborates with established organizations solving problems and providing advice</p>
					</p>
					<p className="h-4"></p>
					<p>
						<p><a href="/labs" className="text-main hover:text-tertiary">The Labs</a> provides support for early-stage, socially impactful companies and organizations</p>
					</p>
					<p className="h-4"></p>
					<p>
						<p><a href="/studio" className="text-main hover:text-tertiary">The Studio</a> builds and curates a collection of tools, services, and products that can readily be reused</p>
					</p>
				</div>
			</div>
			<div className="flex flex-row">
				<div className="max-w-xl my-4 p-5 bg-gray-800 bg-opacity-70 text-lg text-white">
					<p className="mb-2 text-2xl text-main">Our vision</p>
					<p>Often technology is so focused on making money that organizations serving our communities are overlooked and left behind.</p>
				</div>
			</div>
			<div className="flex flex-row-reverse">
				<div className="max-w-xl my-4 p-5 bg-gray-900 bg-opacity-70 text-lg text-white">
					<p className="mb-2 text-2xl text-main">Our team</p>
					<p className="">We are a group of women who connected over our shared disappointment in traditional digital consultancies and were dedicated to imagining a more meaningful and impactful alternative. After months of lamenting what wasn't working, we decided to jump in and create River Delta. In all of our work, we operate on set of three pillars: equity, community, and humility.</p>
					<p className="w-max mt-3 text-main hover:text-tertiary"><a href="/about">Read more</a></p>
				</div>
			</div>
			<div className="flex flex-row">
				<div className="max-w-xl my-4 p-5 bg-gray-800 bg-opacity-70 text-lg text-white">
					<p className="mb-2 text-2xl text-main">Our Zero Profit model</p>
					<p>We are the creators of the Zero Profit model. This means our focus is reducing costs to partners while providing the best service.</p>
					<p className="h-4"></p>
					<p>We don't have uninvolved shareholders who are care about profit. All of our revenue goes only to salaries and small overhead costs (website, accounting, etc.). This allows our partners to keep money where it matters the most: the community.</p>
					<p className="h-4"></p>
					<p>Money doesn't drive us, and we truly belive that your success is our success. We look forward to partnering with you to build a better future - a more equitable future.</p>
					<p className="w-max mt-3 text-main hover:text-tertiary"><a href="/about">Read more</a></p>
				</div>
			</div>
		</>
  )
}

export default IndexPage;
