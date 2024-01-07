/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination:'/board',
				permanent: true
			}
		]
	}
}

module.exports = nextConfig
