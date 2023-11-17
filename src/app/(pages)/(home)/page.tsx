import CTA from "./sections/CTA";
import Content from "./sections/Content";
import Intro from "./sections/Intro";
import Knowledge from "./sections/Knowledge";
import LogoBanner from "./sections/LogoBanner";
import Technologies from "./sections/Technologies";

const HomePage = () => (
	<>
		<Intro />
		<Technologies />
		<Knowledge />
		<LogoBanner />
		<Content />
		<CTA />
	</>
);

export default HomePage;
