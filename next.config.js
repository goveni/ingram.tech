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
			{
				source: "/qr/card",
				destination: "/?utm_source=business-card&utm_medium=qrcode",
				permanent: false,
			},
			{
				source: "/stripe",
				destination: "https://dfs-demo.ingram.tech",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
