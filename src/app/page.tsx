import { Victor_Mono } from "next/font/google";
import Intro from "./Home/Intro";
import CTA from "./Home/CTA";
import Knowledge from "./Home/Knowledge";
import Content from "./Home/Content";

const monofont = Victor_Mono({ subsets: ["latin"] });
const monospace = monofont.className;

const HomePage = () => (
	<>
	<Intro/>
	<Knowledge/>
	<Content/>
	<CTA/>
	</>
);

export default HomePage;
