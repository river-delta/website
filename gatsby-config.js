module.exports = {
	siteMetadata: {
		title: "website",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-layout",
			options: {
				component: require.resolve(`./src/layouts/index.tsx`),
			},
		},
		"gatsby-plugin-mdx",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		"gatsby-plugin-postcss"
	],
};
