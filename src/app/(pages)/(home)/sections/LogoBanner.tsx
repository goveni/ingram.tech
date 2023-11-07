import Image from "next/image";
import React from "react";

function LogoBanner() {
	return (
		<div className="h-screen flex justify-center items-center">
			<div className="mx-auto max-w-full px-6 lg:px-8 text-center">
				<h1>They trust us</h1>
				<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-7 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-7">
					<img
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
						src="/logo/amazon.svg"
						alt="Transistor"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
						src="/logo/rpf.svg"
						alt="Reform"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
						src="/logo/Thales.svg"
						alt="Tuple"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
						src="/logo/un.svg"
						alt="SavvyCal"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
						src="/logo/data.png"
						alt="Statamic"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
						src="/logo/gdpr.jpeg"
						alt="Statamic"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
						src="/logo/reach.jpg"
						alt="Statamic"
						width={158}
						height={48}
					/>
				</div>
			</div>
		</div>
	);
}

export default LogoBanner;
