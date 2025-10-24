import React from "react";
import { FaArrowRight } from "react-icons/fa";

const learningCards = [
	{
		title: "Budgeting Basics",
		description:
			"Learn how to create and stick to a budget that works for your lifestyle and goals.",
		image: "https://assets.hipcv.com/content/Illustrations-for-content/budgeting.jpeg",
		link: "#",
		bgColor: "bg-blue-50",
		textColor: "text-blue-700",
	},
	{
		title: "Smart Saving",
		description:
			"Discover effective strategies to build your savings and create an emergency fund.",
		image: "https://static.vecteezy.com/system/resources/previews/049/404/897/non_2x/financial-empowerment-concept-financial-education-abstract-illustration-set-budgeting-skills-investment-knowledge-metaphor-flat-illustration-on-background-vector.jpg",
		link: "#",
		bgColor: "bg-green-50",
		textColor: "text-green-700",
	},
	{
		title: "Investment Basics",
		description:
			"Understand the fundamentals of investing and how to grow your wealth over time.",
		image: "https://static.vecteezy.com/system/resources/previews/069/164/131/non_2x/woman-studying-financial-literacy-and-budgeting-illustration-vector.jpg",
		link: "#",
		bgColor: "bg-purple-50",
		textColor: "text-purple-700",
	},
];

const LearningSection = () => {
	return (
		<section className="bg-white py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						Learn Financial Literacy
					</h2>
					<p className="text-gray-600 mt-2">
						Master the fundamentals of personal finance
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{learningCards.map((card, index) => (
						<div
							key={index}
							className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col ${card.bgColor}`}
						>
							<div className="p-8 bg-white">
								<img
									src={card.image}
									alt={card.title}
									className="w-full h-48 object-contain"
								/>
							</div>
							<div className="p-6 flex flex-col flex-grow">
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									{card.title}
								</h3>
								<p className="text-gray-600 mb-4 flex-grow">
									{card.description}
								</p>
								<a
									href={card.link}
									className={`inline-flex items-center font-semibold mt-auto ${card.textColor} hover:underline`}
								>
									Read More
									<FaArrowRight className="ml-2" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default LearningSection;
