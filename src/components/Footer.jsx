import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<div className="flex items-center space-x-2 mb-4">
							<div className="bg-green-500 p-2 rounded-lg">
								<BsGraphUpArrow className="text-white text-xl" />
							</div>
							<span className="text-xl font-bold">KepoDuit</span>
						</div>
						<p className="text-gray-400 text-sm">
							Membantu meningkatkan literasi keuangan dengan teknologi AI
							terdepan.
						</p>
					</div>
					<div>
						<h4 className="font-bold mb-4">Fitur</h4>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<a href="#" className="hover:text-white">
									Kalkulator Keuangan
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									AI Advisor
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Dashboard Analytics
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Laporan Keuangan
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-4">Dukungan</h4>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<a href="#" className="hover:text-white">
									Bantuan
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									FAQ
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Kontak
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Tutorial
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-4">Ikuti Kami</h4>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-400 hover:text-white">
								<FaFacebook size={20} />
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								<FaTwitter size={20} />
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								<FaInstagram size={20} />
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								<FaLinkedin size={20} />
							</a>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
					<p>&copy; 2024 KepoDuit. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
