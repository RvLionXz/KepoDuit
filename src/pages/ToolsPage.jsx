import React from "react";
import Calculator from "../components/Calculator";
import Dashboard from "../components/Dashboard";

const ToolsPage = ({ financials, onCalculate }) => {
	return (
		<>
			<div id="kalkulator">
				<Calculator onCalculate={onCalculate} results={financials} />
			</div>
			<div id="dashboard">
				<Dashboard financials={financials} />
			</div>
		</>
	);
};

export default ToolsPage;
