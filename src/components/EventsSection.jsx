import React from "react";
import {
	FaCalendarAlt,
	FaClock,
	FaMapMarkerAlt,
	FaVideo,
} from "react-icons/fa";

const eventData = [
	{
		title: "Webinar Investasi Saham Pemula",
		type: "Online",
		date: "25 Oktober 2024",
		time: "19:00 WIB",
		locationOrPlatform: "Zoom Meeting",
		description:
			"Pelajari dasar-dasar investasi saham dari nol bersama para ahli di bidangnya.",
		link: "#",
	},
	{
		title: "Workshop Perencanaan Dana Pensiun",
		type: "Offline",
		date: "10 November 2024",
		time: "09:00 - 15:00 WIB",
		locationOrPlatform: "Hotel Ayani, Banda Aceh",
		description:
			"Siapkan masa tua yang sejahtera dengan strategi perencanaan dana pensiun yang terbukti efektif.",
		link: "#",
	},
	{
		title: "Diskusi Terbuka: Mengelola Utang dengan Bijak",
		type: "Online",
		date: "15 November 2024",
		time: "20:00 WIB",
		locationOrPlatform: "YouTube Live",
		description:
			"Sesi tanya jawab langsung dengan konsultan keuangan tentang cara keluar dari jeratan utang.",
		link: "#",
	},
];

const EventsSection = () => {
	return (
		<section
			id="acara-keuangan"
			className="bg-gray-50 py-20"
			aria-labelledby="events-title"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2
						id="events-title"
						className="text-3xl md:text-4xl font-bold text-gray-800"
					>
						Acara Keuangan Mendatang
					</h2>
					<p className="text-gray-600 mt-2">
						Perluas wawasan dan jaringan Anda di acara-acara pilihan kami.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{eventData.map((event) => (
						<div
							key={event.title}
							className="bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
						>
							<div className="p-6">
								<div className="flex justify-between items-start mb-3">
									<h3 className="text-xl font-bold text-gray-900 pr-4">
										{event.title}
									</h3>
									<span
										className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
											event.type === "Online"
												? "bg-blue-100 text-blue-800"
												: "bg-orange-100 text-orange-800"
										}`}
									>
										{event.type}
									</span>
								</div>
								<p className="text-gray-600 mb-4 text-sm h-16">
									{event.description}
								</p>

								<div className="space-y-2 text-gray-700 border-t pt-4">
									<div className="flex items-center gap-3">
										<FaCalendarAlt className="text-green-500" />{" "}
										<span>{event.date}</span>
									</div>
									<div className="flex items-center gap-3">
										<FaClock className="text-green-500" />{" "}
										<span>{event.time}</span>
									</div>
									<div className="flex items-center gap-3">
										{event.type === "Online" ? (
											<FaVideo className="text-green-500" />
										) : (
											<FaMapMarkerAlt className="text-green-500" />
										)}
										<span>{event.locationOrPlatform}</span>
									</div>
								</div>
							</div>

							<div className="mt-auto p-6 bg-gray-50">
								<a
									href={event.link}
									className="w-full block text-center bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
								>
									Daftar atau Info Lengkap
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EventsSection;
