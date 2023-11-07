import CTA from "./sections/CTA";
import Content from "./sections/Content";
import Intro from "./sections/Intro";
import Knowledge from "./sections/Knowledge";
import LogoBanner from "./sections/LogoBanner";



const HomePage = () => (
	<>
		<Intro />
		<Knowledge />
		<LogoBanner/>
		<Content />
		<CTA />
	</>
);

export default HomePage;
