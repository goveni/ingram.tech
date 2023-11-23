function LogoBanner() {
	return (
		<div className="bg-zinc-900 py-24 sm:py-32">
			<h1 className="text-center my-5">They trust us</h1>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
					<div className=" p-8 sm:p-10 flex items-center">
						<img
							className="max-h-32 w-full object-contain"
							src="/logo/amazon.svg"
							alt="Transistor"
							width={158}
							height={48}
						/>
					</div>
					<div className=" p-6 sm:p-10 flex items-center">
						<img
							className="max-h-12 w-full object-contain"
							src="/images/logos/ftbe.svg"
							alt="Reform"
							width={158}
							height={48}
						/>
					</div>
					<div className=" p-6 sm:p-10 flex items-center">
						<img
							className="max-h-6 w-full object-contain"
							src="/logo/Thales.svg"
							alt="Tuple"
							width={158}
							height={48}
						/>
					</div>
					<div className=" p-6 sm:p-10 flex items-center">
						<img
							className="max-h-24 w-full object-contain"
							src="/logo/rpf.svg"
							alt="Laravel"
							width={158}
							height={48}
						/>
					</div>
					<div className=" p-6 sm:p-10 flex items-center">
						<img
							className="max-h-20 w-full object-contain"
							src="logo/un.svg"
							alt="SavvyCal"
							width={158}
							height={48}
						/>
					</div>
					<div className=" p-6 sm:p-10 flex items-center">
						<img
							className="max-h-24 w-full object-contain"
							src="/logo/stripe2.png"
							alt="SavvyCal"
							width={158}
							height={48}
						/>
					</div>
					<div className=" p-6 sm:p-10">
						<img
							className="max-h-20 w-full object-contain"
							src="/images/logos/iso27001.png"
							alt="SavvyCal"
							width={158}
							height={48}
						/>
					</div>
					<div className=" p-6 sm:p-10">
						<img
							className="max-h-28 w-full object-contain"
							src="/images/logos/pcidss.svg"
							alt="SavvyCal"
							width={158}
							height={48}
						/>
					</div>
					<div className=" p-6 sm:p-10 flex items-center">
						<img
							className="max-h-16 w-full object-contain"
							src="/images/logos/gdpr.png"
							alt="Statamic"
							width={158}
							height={48}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LogoBanner;
