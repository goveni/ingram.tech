import data from "./members.json";

const TeamPage = () => {
	const members = data.members;
	return (
		<div className="bg-zinc-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
				<div className="mx-auto max-w-2xl">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Meet the people.
					</h2>
					<p className="mt-4 text-lg leading-8 text-gray-400">
						Each team member has gone through a lengthy vetting process and
						rigorous training. We do not outsource our work offshore. <br />
						You&apos;re in good hands.
					</p>
				</div>
				<ul
					role="list"
					className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
				>
					{members.map((person) => (
						<li
							key={person.name}
							className="rounded-2xl bg-gray-800 px-8 py-10"
						>
							<img
								className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
								src={person.image}
								alt=""
							/>
							<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
								{person.name}
							</h3>
							<h4 className=" text-base font-semibold leading-7 tracking-tight text-white">
								{person.title}
							</h4>
							<p className="text-sm leading-6 text-gray-400">
								{person.role}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TeamPage;
