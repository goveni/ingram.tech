/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/qr/dfs-flyer-contest",
				destination:
					"https://share-eu1.hsforms.com/1lnmc-TltTAqlog5PMc5V6A2b7hj7",
				permanent: false,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: "/qr/card",
				destination: "/?utm_source=business-card&utm_medium=qrcode",
			},
		];
	},
};

module.exports = nextConfig;
