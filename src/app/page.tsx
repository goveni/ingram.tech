import {Victor_Mono} from "next/font/google";
import CTA from "./Home/CTA";
import Content from "./Home/Content";
import Intro from "./Home/Intro";
import Knowledge from "./Home/Knowledge";

const monofont = Victor_Mono({subsets: ["latin"]});
const monospace = monofont.className;

const HomePage = () => (
	<>
		<Intro />
		<Knowledge />
		<Content />
		<CTA />
	</>
);

export default HomePage;
