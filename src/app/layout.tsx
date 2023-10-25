import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ingram",
	description: "Your partner in AI",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<body className={`${inter.className} relative bg-zinc-900 text-white`}>
		<main >
        <Navbar/>
          {children}
          <Footer/>
          </main>
		</body>
	</html>
);

export default RootLayout;
