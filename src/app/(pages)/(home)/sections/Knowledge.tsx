import {GiProgression, GiShieldReflect, GiTechnoHeart} from "react-icons/gi";

const features = [
	{
		name: "Expertise",
		description: `Based in France and Belgium, our team of experts in Cybersecurity, AI and Business Intelligence has over 30 years' experience serving major groups and international organizations using our unique FARADAY technology.`,
		href: "#",
		icon: GiProgression,
	},
	{
		name: "Safety",
		description: `We safeguard your data on your own server, ensuring impenetrable integrity. GDPR compliance is our unwavering commitment. Our meticulous boundary-setting defines the path our AI must tread, guaranteeing a safe user experience.`,
		href: "#",
		icon: GiShieldReflect,
	},
	{
		name: "Adaptability",
		description: `Craft your own specialists, ready to field any technical queries. Whether it's a "Swedish attorney specializing in employment rights" or a "vet with expertise in red panda bears," we train them for you. Creating assistants is just one of our many AI powered tools.`,
		href: "#",
		icon: GiTechnoHeart,
	},
];

const Knowledge = () => {
	return (
		<div className="bg-zinc-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-indigo-400">
						Move faster with our cutting-edge AI-powered tools
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Everything you need to get started with AI
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						Get the answers you need <b>fast</b>.
					</p>
					<p>
						At <b>INGRAM</b>, we believe that the power of AI should be
						accessible to all, without compromising security. Discover how
						we&apos;re making this possible.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
									<feature.icon
										className="h-5 w-5 flex-none text-indigo-400"
										aria-hidden="true"
									/>
									{feature.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
									<p className="flex-auto">{feature.description}</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default Knowledge;
