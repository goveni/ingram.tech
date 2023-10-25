const page = () => {
	return (
		<div className="relative bg-zinc-900 my-36">
			<div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
				<div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
					<div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
						<img
							className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
							src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
							alt=""
						/>
					</div>
				</div>
				<div className="px-6 lg:contents">
					<div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
						<p className="text-base font-semibold leading-7 text-indigo-600">
							Deploy faster
						</p>
						<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
							About Ingram
						</h1>
						<p className="mt-6 text-xl leading-8 text-gray-700">
							Nestled in the heart of Brussels, Goveni is a leading
							technical consultancy at the forefront of the AI revolution.
						</p>
						<div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
							<p>
								With over a decade&apos;s worth of experience in
								fintech, and a deep understanding of the complexities
								and nuances of the financial sector, Goveni is renowned
								for its comprehensive, tailor-made strategies that drive
								innovation and transform businesses. Our expertise is
								broad and deep, reflecting the robust, diverse skill set
								of our team. This rich tapestry of talents and insights
								fuels our ability to deliver optimal solutions, enabling
								businesses to stay ahead in an ever-evolving digital
								landscape.
							</p>

							<p className="mt-8">
								We take pride in the robust collaborative environment
								that defines our modus operandi. Our clients have direct
								access to a multifaceted team of industry veterans, tech
								innovators, and creative problem solvers, each committed
								to creating value and fostering success. The breadth and
								depth of our resources allow us to offer a 360-degree
								view of the challenges at hand and craft bespoke
								solutions that cater to the unique needs and aspirations
								of each client.
							</p>
							<h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
								Our track record
							</h2>
							<p className="mt-6">
								Goveni&apos;s track record of delivering game-changing
								solutions speaks for itself. By continually adapting to
								the landscape, we help businesses break new ground,
								unlock fresh opportunities, and foster sustainable
								growth. Our approach relies on our combined expertise in
								solving business, legal and technical challenges, paired
								with meticulous planning, and a relentless commitment to
								quality.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
