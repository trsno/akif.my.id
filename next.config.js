/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io'
			},
			{
				protocol: 'https',
				hostname: 'audioapi.net'
			},
			{
				protocol: 'https',
				hostname: 'm.media-amazon.com'
			}
		]
	}
};
