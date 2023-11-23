const page = () => {
	return (
		<div className="mx-auto py-24 sm:py-32 max-w-7xl px-6 lg:px-8">
			<img
				src="/solutions.jpg"
				alt=""
				className="absolute inset-0 opacity-10 mix-blend-color-dodge -z-10 h-full w-full object-cover"
			/>
			<div className="mx-auto max-w-2xl lg:mx-0 px-6 lg:px-8">
				<h2 className="text-6xl font-bold tracking-tight text-white sm:text-6xl">
					Solution
				</h2>
				<p className=" text-2xl font-bold text-indigo-400">
					Personalized AI Solutions
				</p>
			</div>
			<div className="my-20 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center">
				<div className="w-full sm:w-full md:w-full lg:w-6/12 order-3 lg:order-1">
					<h3>Instant Information Extraction:</h3>
					<p >
						Capable of reading a 500-page PDF in a mere second, ensuring
						rapid and effortless access to any desired information.
					</p>
				</div>
				<img
					className="w-6/12 sm:w-6/12 md:w-6/12 lg:w-3/12 mt-4 sm:mt-0 md:mt-0 lg:mt-0 order-2 lg:order-1"
					src="/images/solutions/extraction.svg"
					alt=""
				/>
			</div>

			<div className="  my-20 flex flex-col sm:flex-col md:flex-col lg:flex-row  justify-between items-center">
				<img
					className="w-6/12 sm:w-6/12 md:w-6/12 lg:w-3/12 mt-4 sm:mt-0 md:mt-0 lg:mt-0"
					src="/images/solutions/demand.svg"
					alt=""
				/>
				<div className="w-full sm:w-full md:w-full lg:w-6/12">
					<h3>AI-Personalities on Demand:</h3>
					<p >
						Craft your own specialists, ready to field any technical
						queries. Whether it's a 'Swedish attorney specializing' in
						employment rights or a 'veterinarian with expertise in red panda
						bears', we train them for you.
					</p>
				</div>
			</div>
			<div className="my-20 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center">
				<div className="w-full sm:w-full md:w-full lg:w-6/12 order-3 lg:order-1">
					<h3>24/7 Chatbot Excellence:</h3>
					<p >
						Never miss an incoming signal with our chatbot that operates
						around the clock. Enhance customer satisfaction and drive
						transformative business outcomes.
					</p>
				</div>
				<img
					className="w-6/12 sm:w-6/12 md:w-6/12 lg:w-3/12 mt-4 sm:mt-0 md:mt-0 lg:mt-0 order-2 lg:order-1"
					src="/images/solutions/24-7.svg"
					alt=""
				/>
			</div>
			<div className="  my-20 flex flex-col sm:flex-col md:flex-col lg:flex-row  justify-between items-center">
				<img
					className="w-6/12 sm:w-6/12 md:w-6/12 lg:w-3/12 mt-4 sm:mt-0 md:mt-0 lg:mt-0"
					src="/images/solutions/market.svg"
					alt=""
				/>
				<div className="w-full sm:w-full md:w-full lg:w-6/12">
					<h3>Continuous Market Insight:</h3>
					<p >
						Maintain an unwavering focus on market dynamics, competitors,
						and strategic partners to make well-informed decisions.
					</p>
				</div>
			</div>
			<div className="my-20 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center">
				<div className="w-full sm:w-full md:w-full lg:w-6/12 order-3 lg:order-1">
					<h3>AI-Powered Team Training:</h3>
					<p >
						Elevate your team's capabilities through our AI-powered teaching
						solutions.
					</p>
				</div>
				<img
					className="w-6/12 sm:w-6/12 md:w-6/12 lg:w-3/12 mt-4 sm:mt-0 md:mt-0 lg:mt-0 order-2 lg:order-1"
					src="/images/solutions/training.svg"
					alt=""
				/>
			</div>
			<div className="  my-20 flex flex-col sm:flex-col md:flex-col lg:flex-row  justify-between items-center">
				<img
					className="w-6/12 sm:w-6/12 md:w-6/12 lg:w-3/12 mt-4 sm:mt-0 md:mt-0 lg:mt-0"
					src="/images/solutions/security.svg"
					alt=""
				/>
				<div className="w-full sm:w-full md:w-full lg:w-6/12">
					<h3>Ultimate Data Security:</h3>
					<p >
						Keep all your data safe and secure with the first European AI
						tools hosted right at your doorstep.
					</p>
				</div>
			</div>
		</div>
	);
};

export default page;
