import React from "react";
import MentorSearch from "../components/MentorSearch";
import Advisor from "../components/Advisor";

const CommunityPage = () => {
	return (
		<>
			<div id="cari-mentor">
				<MentorSearch />
			</div>
			<div id="advisor">
				<Advisor />
			</div>
		</>
	);
};

export default CommunityPage;
