import Link from "next/link";

const features = [
	{
		name: "Instant Information Extraction",
		image: "/images/solutions/extraction.svg",
	},
	{
		name: "AI-Personalities on Demand",
		image: "/images/solutions/demand.svg",
	},
	{
		name: "24/7 Chatbot Excellence",
		image: "/images/solutions/24-7.svg",
	},
	{
		name: "Continuous Market Insight",
		image: "/images/solutions/market.svg",
	},
	{
		name: "AI-Powered Team Training",
		image: "/images/solutions/training.svg",
	},
	{
		name: "Ultimate Data Security",
		image: "/images/solutions/security.svg",
	},
];

const Solutions = () => {
	return (
		<div className="bg-zinc-900 py-24 sm:py-16">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
						Solutions
					</p>
					<h2 className="text-base font-semibold leading-7 text-indigo-400">
						KEY EXPERTISE
					</h2>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-2 text-center gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="flex flex-col items-center gap-x-3 text-base font-semibold leading-7 text-white">
									<img
										className="w-5/12"
										src={feature.image}
										alt=""
									/>
									<h4>{feature.name}</h4>
								</dt>
							</div>
						))}
					</dl>
				</div>
			</div>
			<div className="flex justify-center mt-10">
				<button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					<Link href="/solutions">Discover more</Link>
				</button>
			</div>
		</div>
	);
};

export default Solutions;
