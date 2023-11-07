import React from "react";

const features = [
	{
		name: "Instant Information Extraction: ",
		description:
			"Capable of reading a 500-page PDF in a mere second, ensuring rapid and effortless access to any desired information.",
	},
	{
		name: "AI-Personalities on Demand:",
		description:
			"Craft your own specialists, ready to field any technical queries. Whether it's a 'Swedish attorney specializing' in employment rights or a 'veterinarian with expertise in red panda bears', we train them for you.",
	},
	{
		name: "24/7 Chatbot Excellence:",
		description:
			"Never miss an incoming signal with our chatbot that operates around the clock. Enhance customer satisfaction and drive transformative business outcomes.",
	},
	{
		name: "Continuous Market Insight:",
		description:
			"Maintain an unwavering focus on market dynamics, competitors, and strategic partners to make well-informed decisions.",
	},
	{
		name: "AI-Powered Team Training: ",
		description:
			"Elevate your team's capabilities through our AI-powered teaching solutions.",
	},
	{
		name: "Ultimate Data Security: ",
		description:
			"Keep all your data safe and secure with the first European AI tools hosted right at your doorstep.",
	},
];

const page = () => {
	return (
		<div>
			<img
				src="/product/bg-product.webp"
				alt=""
				className="absolute inset-0 opacity-30 -z-10 h-full w-full object-cover"
			/>
			<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
				<div>
					<h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Our toolbox
					</h1>

					<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						{features.map((feature) => (
							<div
								key={feature.name}
								className="border-t border-gray-200 pt-4"
							>
								<dt className="font-medium text-white">
									{feature.name}
								</dt>
								<dd className="mt-2 text-sm text-gray-500">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
					<img
						src="/product/product1.webp"
						alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
						className="rounded-lg "
						style={{width: "100%"}}
					/>
					<img
						src="/product/product2.webp"
						alt="Top down view of walnut card tray with embedded magnets and card groove."
						className="rounded-lg "
						style={{width: "100%"}}
					/>
					<img
						src="/product/product3.webp"
						alt="Side of walnut card tray with card groove and recessed card area."
						className="rounded-lg "
						style={{width: "100%"}}
					/>
					<img
						src="/product/product4.webp"
						alt="Walnut card tray filled with cards and card angled in dedicated groove."
						className="rounded-lg "
						style={{width: "100%"}}
					/>
					<img
						src="/product/product5.webp"
						alt="Walnut card tray filled with cards and card angled in dedicated groove."
						className="rounded-lg "
						style={{width: "100%"}}
					/>
					<img
						src="/product/product6.webp"
						alt="Walnut card tray filled with cards and card angled in dedicated groove."
						className="rounded-lg "
						style={{width: "100%"}}
					/>
				</div>
			</div>
		</div>
	);
};

export default page;
