import Image from "next/image";
import React from "react";

const DFSSummitPage: React.FC = () => (
	<div className="bg-blue-dark min-h-screen">
		<div className="max-w-3xl mx-auto pt-16 px-8 space-y-8 text-right">
			<Image src="/ingram_logo.png" alt="Ingram Logo" width={1362} height={320} />
			<h1 className="text-6xl">
				Stripe Payments
				<br />
				<b>for AI Chatbots</b>
			</h1>
			<section className="text-2xl">
				<p className="font-bold">Embed Payments in your LLM</p>
				<p>Reduce Payments Friction</p>
				<p className="font-bold">Enable New Ways to Pay</p>
				<p>Increase Engagement</p>
			</section>
			<section className="flex justify-end">
				<div>
					<Image
						src="/qr_code.png"
						width={340}
						height={340}
						alt="ingram.tech/dfs23 QR Code"
					/>
					<p className="text-center text-xl mt-2">ingram.tech/dfs23</p>
				</div>
			</section>
			<section className="flex gap-x-8 items-center justify-end">
				<Image
					src="/ftbe_logo.png"
					width={180}
					height={53}
					alt="Fintech Belgium Logo"
				/>
				<Image
					src="/stripe_logo.png"
					width={180}
					height={76}
					alt="Stripe Logo"
				/>
			</section>
		</div>
	</div>
);

export default DFSSummitPage;
