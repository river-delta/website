import React from "react";
import { Head } from "../components";

import "tailwindcss/tailwind.css";

const IndexPage: React.FC = () => {
  return (
		<>
			<Head title="River Delta | Home" />
			<h1 className="text-3xl">
				Welcome to River Delta
			</h1>
			<div className="my-4">
				<p>We are a partner-based digital consultancy focusing exclusively on non-profits, local and state governments, and schools. We offer a robust array of services aimed at helping your organization succeed in the digital world. Our services include: funding opportunity support, user research, digital and service design, and software development.</p>
			</div>
		</>
  )
}

export default IndexPage
