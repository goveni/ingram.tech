import Image from "next/image";
import React from "react";

const DFSSummitPage: React.FC = () => (
	<div className="bg-blue-dark min-h-screen">
		<div className="max-w-3xl mx-auto px-8 space-y-8 text-right">
			<Image src="/ingram_logo.png" alt="Ingram Logo" width={1362} height={320} />
			<h1 className="text-6xl">
				Stripe Payments
				<br />
				<b>for AI Chatbots</b>
			</h1>
			<section>
				<p>Embed Payments in your LLM</p>
				<p>Reduce Payments Friction</p>
				<p>Enable new ways to pay</p>
				<p>Increate Engagement</p>
			</section>
			<section>[QR Image Placeholder]</section>
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
