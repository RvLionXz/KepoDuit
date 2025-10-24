import React, { useState, useEffect, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
	FaVideo,
	FaComments,
	FaAmericanSignLanguageInterpreting,
	FaUniversalAccess,
	FaMapMarkerAlt,
	FaChevronDown,
	FaCheck,
} from "react-icons/fa";

const mentorData = [
	{
		name: "Budi Santoso",
		image: "https://i.pravatar.cc/150?u=budi",
		specialties: ["Anggaran Dasar", "Manajemen Utang"],
		communicationMethods: ["Video Call", "Chat Teks", "Kunjungan Langsung"],
		bio: "Saya percaya semua orang bisa mengelola keuangan dengan baik. Mari kita mulai dari dasar!",
	},
	{
		name: "Citra Lestari",
		image: "https://i.pravatar.cc/150?u=citra",
		specialties: ["Investasi Pemula", "Perencanaan Pensiun"],
		communicationMethods: ["Video Call", "Bahasa Isyarat"],
		bio: "Spesialis dalam membantu teman-teman Tuli merencanakan investasi. Saya fasih berbahasa isyarat (Bisindo).",
	},
	{
		name: "Andi Wijaya",
		image: "https://i.pravatar.cc/150?u=andi",
		specialties: ["Anggaran Tunjangan", "Asuransi"],
		communicationMethods: [
			"Chat Teks",
			"Screen Reader Friendly",
			"Kunjungan Langsung",
		],
		bio: "Berpengalaman dalam mengoptimalkan tunjangan disabilitas dan merencanakan keuangan yang stabil.",
	},
	{
		name: "Dewi Anggraini",
		image: "https://i.pravatar.cc/150?u=dewi",
		specialties: ["Investasi Pemula", "Manajemen Utang"],
		communicationMethods: ["Video Call", "Chat Teks"],
		bio: "Mentor yang sabar dan siap membimbing Anda melewati tantangan utang menuju kebebasan finansial.",
	},
];

const communicationIcons = {
	"Video Call": <FaVideo aria-hidden="true" />,
	"Chat Teks": <FaComments aria-hidden="true" />,
	"Bahasa Isyarat": <FaAmericanSignLanguageInterpreting aria-hidden="true" />,
	"Screen Reader Friendly": <FaUniversalAccess aria-hidden="true" />,
	"Kunjungan Langsung": <FaMapMarkerAlt aria-hidden="true" />,
};

const CustomDropdown = ({ label, value, onChange, options }) => (
	<div className="flex-1">
		<Listbox value={value} onChange={onChange}>
			<Listbox.Label className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</Listbox.Label>
			<div className="relative">
				<Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm">
					<span className="block truncate">
						{value === "all" ? `Semua ${label}` : value}
					</span>
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
						<FaChevronDown
							className="h-4 w-4 text-gray-400"
							aria-hidden="true"
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						<Listbox.Option
							value="all"
							className={({ active }) =>
								`relative cursor-default select-none py-2 pl-10 pr-4 ${
									active ? "bg-green-100 text-green-900" : "text-gray-900"
								}`
							}
						>
							{({ selected }) => (
								<>
									<span
										className={`block truncate ${
											selected ? "font-medium" : "font-normal"
										}`}
									>{`Semua ${label}`}</span>
									{selected && (
										<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
											<FaCheck className="h-5 w-5" aria-hidden="true" />
										</span>
									)}
								</>
							)}
						</Listbox.Option>
						{options.map((opt) => (
							<Listbox.Option
								key={opt}
								value={opt}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-10 pr-4 ${
										active ? "bg-green-100 text-green-900" : "text-gray-900"
									}`
								}
							>
								{({ selected }) => (
									<>
										<span
											className={`block truncate ${
												selected ? "font-medium" : "font-normal"
											}`}
										>
											{opt}
										</span>
										{selected && (
											<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
												<FaCheck className="h-5 w-5" aria-hidden="true" />
											</span>
										)}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	</div>
);

const MentorSearch = () => {
	const [mentors, setMentors] = useState(mentorData);
	const [filters, setFilters] = useState({
		specialty: "all",
		communication: "all",
	});

	useEffect(() => {
		let filteredMentors = mentorData;
		if (filters.specialty !== "all")
			filteredMentors = filteredMentors.filter((mentor) =>
				mentor.specialties.includes(filters.specialty)
			);
		if (filters.communication !== "all")
			filteredMentors = filteredMentors.filter((mentor) =>
				mentor.communicationMethods.includes(filters.communication)
			);
		setMentors(filteredMentors);
	}, [filters]);

	const handleFilterChange = (filterName, value) => {
		setFilters((prev) => ({ ...prev, [filterName]: value }));
	};

	const allSpecialties = [...new Set(mentorData.flatMap((m) => m.specialties))];
	const allCommunications = [
		...new Set(mentorData.flatMap((m) => m.communicationMethods)),
	];

	return (
		<section
			id="cari-mentor"
			className="bg-white py-20"
			aria-labelledby="mentor-title"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2
						id="mentor-title"
						className="text-3xl md:text-4xl font-bold text-gray-800"
					>
						Temukan Mentor Keuangan Anda
					</h2>
					<p className="text-gray-600 mt-2">
						Terhubung dengan para ahli yang siap membantu perjalanan finansial
						Anda.
					</p>
				</div>

				<div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-gray-50 rounded-lg border">
					<CustomDropdown
						label="Spesialisasi"
						value={filters.specialty}
						onChange={(value) => handleFilterChange("specialty", value)}
						options={allSpecialties}
					/>
					<CustomDropdown
						label="Metode Komunikasi"
						value={filters.communication}
						onChange={(value) => handleFilterChange("communication", value)}
						options={allCommunications}
					/>
				</div>

				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{mentors.length > 0 ? (
						mentors.map((mentor) => (
							<li
								key={mentor.name}
								className="bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col overflow-hidden transition-shadow hover:shadow-2xl"
							>
								<div className="p-6 flex flex-col items-center text-center">
									<img
										src={mentor.image}
										alt={`Foto profil ${mentor.name}`}
										className="w-24 h-24 rounded-full mb-4 ring-4 ring-green-100"
									/>
									<h3 className="text-xl font-bold text-gray-900">
										{mentor.name}
									</h3>
									<p className="text-green-600 font-semibold">
										{mentor.specialties.join(", ")}
									</p>
									<p className="text-gray-600 mt-2 flex-grow">{mentor.bio}</p>
								</div>
								<div className="bg-gray-50 p-4 border-t mt-auto">
									<p className="text-sm font-semibold text-gray-700 mb-2">
										Mendukung Komunikasi:
									</p>
									<div className="flex justify-center gap-4 text-xl">
										{mentor.communicationMethods.map((method) => (
											<span
												key={method}
												className="text-gray-600"
												title={method}
											>
												{communicationIcons[method]}
												<span className="sr-only">{method}</span>
											</span>
										))}
									</div>
								</div>
								<div className="p-4">
									<a
										href="#"
										className="w-full block text-center bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
									>
										Lihat Profil & Jadwalkan Sesi
									</a>
								</div>
							</li>
						))
					) : (
						<p className="col-span-full text-center text-gray-500 text-lg">
							Tidak ada mentor yang sesuai dengan kriteria Anda.
						</p>
					)}
				</ul>
			</div>
		</section>
	);
};

export default MentorSearch;
