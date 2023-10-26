const CTA = () => {
	return (
		<div className="bg-zinc-900">
			<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Stay ahead of the curve.
						<br />
						We can help.
					</h2>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="mailto:sales@ingram.tech"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Talk to an Expert Today ⚡
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CTA;
