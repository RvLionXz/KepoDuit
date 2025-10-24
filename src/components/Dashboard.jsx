// src/components/Dashboard.jsx

import React from "react";
import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";
import { FaLightbulb, FaRedo, FaDownload } from "react-icons/fa";

const COLORS = ["#EF4444", "#10B981"]; // Merah untuk Pengeluaran, Hijau untuk Sisa Uang

const Dashboard = ({ financials }) => {
	// Menerima props

	// Data untuk pie chart, dibuat secara dinamis
	const pieData = [
		{ name: "Pengeluaran", value: financials.pengeluaran },
		{
			name: "Sisa Uang",
			value: financials.tabungan > 0 ? financials.tabungan : 0,
		},
	];

	// Hitung persentase untuk ditampilkan di label
	const total = pieData.reduce((sum, entry) => sum + entry.value, 0);

	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold">Dashboard Keuangan</h2>
					<p className="text-gray-600 mt-2">
						Ringkasan dan analisis keuangan personal
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-8">
					{/* Pie Chart */}
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-xl font-bold mb-4">Rasio Pengeluaran</h3>
						{total > 0 ? (
							<div style={{ width: "100%", height: 300 }}>
								<ResponsiveContainer>
									<PieChart>
										<Pie
											data={pieData}
											cx="50%"
											cy="50%"
											labelLine={false}
											outerRadius={120}
											fill="#8884d8"
											dataKey="value"
											label={({ name, percent }) =>
												`${name} ${(percent * 100).toFixed(0)}%`
											}
										>
											{pieData.map((entry, index) => (
												<Cell
													key={`cell-${index}`}
													fill={COLORS[index % COLORS.length]}
												/>
											))}
										</Pie>
										<Tooltip
											formatter={(value) =>
												new Intl.NumberFormat("id-ID", {
													style: "currency",
													currency: "IDR",
													minimumFractionDigits: 0,
												}).format(value)
											}
										/>
										<Legend />
									</PieChart>
								</ResponsiveContainer>
							</div>
						) : (
							<div className="h-[300px] flex items-center justify-center text-gray-500">
								Data tidak cukup untuk menampilkan chart. Silakan isi
								kalkulator.
							</div>
						)}
					</div>

					{/* ... (bagian rekomendasi tidak berubah) ... */}
					<div className="space-y-8">
						<div className="bg-green-50 p-6 rounded-lg">
							<h3 className="text-lg font-bold flex items-center gap-2 mb-2">
								<FaLightbulb className="text-yellow-400" /> Rekomendasi AI
								Terakhir
							</h3>
							<p className="text-gray-700">
								Berdasarkan analisis keuangan Anda, disarankan untuk mengurangi
								pengeluaran hiburan sebesar 15% dan mengalokasikan dana tersebut
								untuk investasi jangka panjang.
							</p>
							<p className="text-sm text-gray-500 mt-4">2 jam yang lalu</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-lg font-bold mb-4">Quick Actions</h3>
							<div className="flex flex-col space-y-3">
								<button className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2">
									<FaRedo /> Hitung Ulang
								</button>
								<button className="w-full bg-white text-green-500 font-bold py-3 px-4 rounded-lg border border-green-500 hover:bg-green-50 transition-all flex items-center justify-center gap-2">
									<FaDownload /> Export Laporan
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
