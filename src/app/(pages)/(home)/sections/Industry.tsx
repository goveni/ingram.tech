import Link from "next/link";

const features = [
	{
		name: "Legal Services",
		image: "/images/industry/legal.svg",
		description:
			"Legal research, contract analysis, and creating specialized AI legal assistants for various practice areas.",
	},
	{
		name: "Finance and Banking",
		image: "/images/industry/finance.svg",
		description:
			"Assist with regulatory compliance, financial document analysis, and creating AI assistants specialized in financial regulations.",
	},
	{
		name: "Healthcare and Pharmaceuticals",
		image: "/images/industry/health.svg",
		description:
			"Extracting medical information, research papers, and creating specialized healthcare AI assistants.",
	},
	{
		name: "Retail and E-commerce",
		image: "/images/industry/ecommerce.svg",
		description:
			"Market research, competitor analysis, and improving customer support through advanced chatbots.",
	},
	{
		name: "Real Estate and Property Management",
		image: "/images/industry/retail.svg",
		description:
			"Automating property document analysis and creating AI assistants for property management tasks.",
	},
	{
		name: "Manufacturing and Supply Chain",
		image: "/images/industry/manufacturing.svg",
		description:
			"Enhance supply chain efficiency, analyze manufacturing data, and streamline processes with AI-powered insights.",
	},
	{
		name: "Marketing and Advertising",
		image: "/images/industry/marketing.svg",
		description:
			"Content analysis, market research, and creating AI assistants specialized in marketing strategy.",
	},
	{
		name: "Education and E-Learning",
		image: "/images/industry/elearning.svg",
		description:
			"Enhance e-learning materials, assist with research, and create specialized AI tutors for various subjects.",
	},
];

const Industry = () => {
	return (
		<div className="bg-zinc-900 py-24 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
						Industry
					</p>
					<h2 className="text-base font-semibold leading-7 text-indigo-400">
						TAILORED AI APPLICATIONS
					</h2>
				</div>
				<dl className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
					{features.map((feature) => (
						<div
							key={feature.name}
							className="pl-0 sm:pl-0 lg:pl-9 flex flex-col sm:flex-row items-center gap-5 sm:gap-5 lg:gap-10 "
						>
							<div>
								<img
									className="h-w-40 w-40"
									src={feature.image}
									alt={feature.name}
								/>
							</div>
							<div>
								<h3>{feature.name}</h3>
								<p >{feature.description}</p>
							</div>
						</div>
					))}
				</dl>
			</div>
			<div className="flex justify-center mt-7">
				<button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					<Link href="/industry">Discover more</Link>
				</button>
			</div>
		</div>
	);
};

export default Industry;
