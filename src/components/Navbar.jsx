import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ title: "Beranda", to: "/" },
		{ title: "Alat Finansial", to: "/tools" },
		{ title: "Komunitas", to: "/community" },
	];

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<>
			<header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<Link to="/" className="flex items-center space-x-2">
						<div className="bg-green-500 p-2 rounded-lg">
							<BsGraphUpArrow className="text-white text-xl" />
						</div>
						<span className="text-xl font-bold text-gray-800">
							KepoDuit
						</span>
					</Link>

					<nav className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.title}
								to={link.to}
								className="text-gray-600 hover:text-green-500 transition-colors"
							>
								{link.title}
							</Link>
						))}
					</nav>

					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-800 focus:outline-none z-50 relative"
						>
							{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
						</button>
					</div>
				</div>
			</header>

			{isOpen && (
				<div
					onClick={() => setIsOpen(false)}
					className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 md:hidden"
				></div>
			)}

			<nav
				className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="p-8 mt-16 flex flex-col space-y-6">
					{navLinks.map((link) => (
						<Link
							key={link.title}
							to={link.to}
							onClick={handleLinkClick}
							className="text-lg text-gray-800 hover:text-green-500"
						>
							{link.title}
						</Link>
					))}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
