import React from "react";
import { FaPlay, FaChartPie } from "react-icons/fa";
import { formatCurrency } from "../App";

const Hero = ({ financials }) => {
	return (
		<section className="relative bg-gradient-to-b from-green-50 to-white h-screen flex items-center overflow-hidden pt-20 pb-12">
			<div className="container mx-auto px-4 relative z-10">
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div className="md:w-1/2 text-center md:text-left">
						<h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
							Platform Literasi{" "}
							<span className="text-green-500">Keuangan Terintegrasi AI</span>
						</h1>
						<p className="mt-4 text-[40px] text-gray-600 max-w-xl mx-auto md:mx-0">
							Belajar hitung duit, biar hidup ga ribet.
						</p>
						<div className="mt-8 flex justify-center md:justify-start space-x-4">
							<a
								href="#kalkulator"
								className="inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-all shadow-md"
							>
								Mulai Sekarang
							</a>
							<button className="bg-white text-green-500 font-bold py-3 px-6 rounded-lg border border-green-500 hover:bg-green-50 transition-all flex items-center space-x-2">
								<FaPlay />
								<span>Lihat Demo</span>
							</button>
						</div>
					</div>

					<div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
						<div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm">
							<h3 className="text-lg font-bold mb-4 flex items-center gap-2">
								<FaChartPie className="text-green-500" /> Financial Overview
							</h3>
							<div className="space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Pendapatan</span>
									<span className="font-bold text-green-600">
										{formatCurrency(financials.pendapatan)}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Pengeluaran</span>
									<span className="font-bold text-red-600">
										{formatCurrency(financials.pengeluaran)}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Tabungan Bulan Ini</span>
									<span className="font-bold text-blue-600">
										{formatCurrency(financials.tabungan)}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
