import React from "react";
import { Head } from "../components";

import "tailwindcss/tailwind.css";

const IndexPage: React.FC = () => {
  return (
		<>
			<Head title="River Delta | Home" />
			<h1>
				River Delta
			</h1>
			<p>River Delta is a partner-based digital consultancy focusing exclusively on non-profits, local and state governments, and schools. We offer a robust array of services aimed at helping your organization succeed in the digital world. Our services include: funding opportunity support, user research, digital and service design, and software development.</p>
		</>
  )
}

export default IndexPage
