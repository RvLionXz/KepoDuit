import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ToolsPage from "./pages/ToolsPage";
import CommunityPage from "./pages/CommunityPage";

export const formatCurrency = (number) => {
	if (isNaN(number)) return "Rp 0";
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
	}).format(number);
};

function App() {
	const [financials, setFinancials] = useState({
		pendapatan: 0,
		pengeluaran: 0,
		tabungan: 0,
		tabunganSaatIni: 0,
		tabunganIdeal: 0,
	});

	const handleCalculation = (data) => {
		const { pendapatan, pengeluaran, tabunganSaatIni } = data;
		const sisaUang = pendapatan - pengeluaran;
		const tabunganIdeal = pendapatan * 0.2;

		setFinancials({
			pendapatan,
			pengeluaran,
			tabungan: sisaUang,
			tabunganSaatIni,
			tabunganIdeal,
		});
	};

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage financials={financials} />} />
					<Route
						path="tools"
						element={
							<ToolsPage
								financials={financials}
								onCalculate={handleCalculation}
							/>
						}
					/>
					<Route path="community" element={<CommunityPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
