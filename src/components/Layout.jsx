import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaQuestion } from "react-icons/fa";

const Layout = () => {
	return (
		<div className="bg-gray-50 text-gray-800 font-sans">
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />

			<button className="fixed bottom-8 right-8 bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
				<FaQuestion size={24} />
			</button>
		</div>
	);
};

export default Layout;
