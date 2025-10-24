// src/components/Calculator.jsx

import React, { useState } from "react";
import {
	FaCalculator,
	FaChartBar,
	FaArrowUp,
	FaArrowDown,
	FaPiggyBank,
	FaWallet,
} from "react-icons/fa";
import { formatCurrency } from "../App"; // Import helper function

const Calculator = ({ onCalculate, results }) => {
	const [inputs, setInputs] = useState({
		pendapatan: "0",
		pengeluaran: "0",
		tabunganSaatIni: "0",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputs((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const dataToSend = {
			pendapatan: parseFloat(inputs.pendapatan) || 0,
			pengeluaran: parseFloat(inputs.pengeluaran) || 0,
			tabunganSaatIni: parseFloat(inputs.tabunganSaatIni) || 0,
		};
		onCalculate(dataToSend);
	};

	return (
		<section id="kalkulator" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold">
						Kalkulator Keuangan Pintar
					</h2>
					<p className="text-gray-600 mt-2">
						Analisis kondisi keuanganmu dengan mudah dan akurat
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-8 items-start">
					{/* Input Form */}
					<div className="bg-white p-8 rounded-lg shadow-lg">
						<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
							<FaCalculator className="text-green-500" /> Input Keuangan
						</h3>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Pendapatan Bulanan (Rp)
								</label>
								<input
									type="number"
									name="pendapatan"
									value={inputs.pendapatan}
									onChange={handleChange}
									className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Pengeluaran Rutin (Rp)
								</label>
								<input
									type="number"
									name="pengeluaran"
									value={inputs.pengeluaran}
									onChange={handleChange}
									className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Tabungan Saat Ini (Opsional)
								</label>
								<input
									type="number"
									name="tabunganSaatIni"
									value={inputs.tabunganSaatIni}
									onChange={handleChange}
									className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-all mt-6"
							>
								Hitung Sekarang
							</button>
						</form>
					</div>

					{/* Analysis Result */}
					<div className="bg-white p-8 rounded-lg shadow-lg">
						<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
							<FaChartBar className="text-green-500" /> Hasil Analisis
						</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-gray-50 p-4 rounded-lg">
								<div className="flex justify-between items-center mb-2">
									<p className="text-sm text-gray-600">Pendapatan Total</p>
									<FaArrowUp className="text-green-500" />
								</div>
								<p className="text-2xl font-bold">
									{formatCurrency(results.pendapatan)}
								</p>
							</div>
							<div className="bg-gray-50 p-4 rounded-lg">
								<div className="flex justify-between items-center mb-2">
									<p className="text-sm text-gray-600">Pengeluaran Total</p>
									<FaArrowDown className="text-red-500" />
								</div>
								<p className="text-2xl font-bold">
									{formatCurrency(results.pengeluaran)}
								</p>
							</div>
							<div className="bg-gray-50 p-4 rounded-lg">
								<div className="flex justify-between items-center mb-2">
									<p className="text-sm text-gray-600">Tabungan Ideal (20%)</p>
									<FaPiggyBank className="text-blue-500" />
								</div>
								<p className="text-2xl font-bold">
									{formatCurrency(results.tabunganIdeal)}
								</p>
							</div>
							<div className="bg-gray-50 p-4 rounded-lg">
								<div className="flex justify-between items-center mb-2">
									<p className="text-sm text-gray-600">Sisa Uang</p>
									<FaWallet className="text-yellow-500" />
								</div>
								<p className="text-2xl font-bold">
									{formatCurrency(results.tabungan)}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Calculator;
