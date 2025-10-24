import React from "react";
import Hero from "../components/Hero";
import LearningSection from "../components/LearningSection";
import EventsSection from "../components/EventsSection";

const HomePage = ({ financials }) => {
	return (
		<>
			<div id="beranda">
				<Hero financials={financials} />
			</div>
			<div id="belajar">
				<LearningSection />
			</div>
			<div id="acara-keuangan">
				<EventsSection />
			</div>
		</>
	);
};

export default HomePage;
