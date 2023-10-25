import React from "react";
import {GiTechnoHeart} from "react-icons/gi";

const features = [
	{
		name: "Evolving",
		description: `In the evolving landscape of artificial intelligence, there
        exists a transformative force that's reshaping the way we
        communicate, learn, and make decisions. This force captures the
        essence of human language, offering depth and versatility in its
        applications, a culmination of countless nuances and
        intricacies. To navigate this vast realm and harness its full
        potential, you need a guiding hand—a master of the craft.`,
		href: "#",
		icon: GiTechnoHeart,
	},
	{
		name: "Expertise",
		description: `Our expertise lies in sculpting this force to perfection. We
        adapt and refine, ensuring it aligns seamlessly with specific
        industry needs, while integrating effortlessly into varied
        platforms. This isn't just about sifting through vast data or
        complex computations—it's about crafting tools that think,
        adapt, and evolve, mirroring the brilliance of human intellect.`,
		href: "#",
		icon: GiTechnoHeart,
	},
	{
		name: "Imagine",
		description: `Imagine conversational agents that rival human interactions,
        content creators that can replicate any narrative flair, or
        systems that can delve deep into texts, unveiling insights in a
        heartbeat. With our bespoke solutions, the line between dream
        and reality blurs. Step into the future of intelligent language
        processing, with us charting the course.`,
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
						Chat Faster
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Everything you need to use our ChatBot
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						Get the answers you need in a shorter amount of time.
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
