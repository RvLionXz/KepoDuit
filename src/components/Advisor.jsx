import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaRobot, FaPaperPlane, FaUser } from "react-icons/fa";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

const Advisor = () => {
	const [messages, setMessages] = useState([
		{
			role: "model",
			text: "Halo! Saya KeDu AI, asisten keuangan dari Google. Apa yang ingin Anda diskusikan tentang keuangan hari ini?",
		},
	]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const chatEndRef = useRef(null);
	const chatSessionRef = useRef(null);

	const scrollToBottom = () => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(scrollToBottom, [messages]);

	useEffect(() => {
		const initialHistory = [
			{
				role: "user",
				parts: [
					{
						text: "Kamu adalah asisten keuangan yang ramah dan membantu untuk pengguna di Indonesia. Namamu adalah FinAI. Selalu berikan jawaban dalam Bahasa Indonesia. Berikan saran yang praktis, jelas, dan memotivasi.",
					},
				],
			},
			{
				role: "model",
				parts: [
					{
						text: "Baik, saya mengerti. Saya FinAI, asisten keuangan Anda. Saya siap membantu dengan saran keuangan yang praktis dalam Bahasa Indonesia.",
					},
				],
			},
		];

		chatSessionRef.current = model.startChat({
			history: initialHistory,
			generationConfig: {
				maxOutputTokens: 1000,
			},
		});
	}, []);

	const handleSend = async () => {
		if (input.trim() === "" || isLoading) return;

		const userMessage = { role: "user", text: input };
		setMessages((prev) => [...prev, userMessage]);
		const prompt = input;
		setInput("");
		setIsLoading(true);

		try {
			const result = await chatSessionRef.current.sendMessage(prompt);
			const response = await result.response;
			const text = response.text();

			const botResponse = { role: "model", text: text };
			setMessages((prev) => [...prev, botResponse]);
		} catch (error) {
			console.error("Error calling Gemini API:", error);
			const errorMessage = {
				role: "model",
				text: "Maaf, terjadi masalah saat berkomunikasi dengan AI. Coba lagi nanti.",
			};
			setMessages((prev) => [...prev, errorMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold">
						KEDU AI
					</h2>
				</div>
				<div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
					<div className="bg-green-500 text-white p-4 flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<FaRobot className="text-3xl" />
							<div>
								<h3 className="font-bold">KeDu AI</h3>
								<p className="text-sm opacity-80">Online - Siap membantu</p>
							</div>
						</div>
						<div className="w-3 h-3 bg-green-300 rounded-full"></div>
					</div>
					<div className="p-6 h-80 overflow-y-auto bg-gray-50 flex flex-col space-y-4">
						{messages.map((msg, index) => (
							<div
								key={index}
								className={`flex items-start space-x-3 ${
									msg.role === "user"
										? "self-end flex-row-reverse space-x-reverse"
										: ""
								}`}
							>
								<div
									className={`p-2 rounded-full text-white ${
										msg.role === "model" ? "bg-green-500" : "bg-blue-500"
									}`}
								>
									{msg.role === "model" ? <FaRobot /> : <FaUser />}
								</div>
								<div
									className={`rounded-lg p-3 max-w-xs ${
										msg.role === "model" ? "bg-gray-200" : "bg-blue-100"
									}`}
								>
									<p className="whitespace-pre-wrap">{msg.text}</p>
								</div>
							</div>
						))}
						{isLoading && (
							<div className="flex items-start space-x-3">
								<div className="p-2 rounded-full text-white bg-green-500 animate-pulse">
									<FaRobot />
								</div>
								<div className="rounded-lg p-3 max-w-xs bg-gray-200">
									<p>KeDu AI sedang berpikir...</p>
								</div>
							</div>
						)}
						<div ref={chatEndRef} />
					</div>
					<div className="p-4 border-t border-gray-200">
						<div className="flex items-center bg-gray-100 rounded-full p-1">
							<input
								type="text"
								placeholder={
									isLoading
										? "Menunggu jawaban..."
										: "Tanya apa saja tentang keuangan..."
								}
								className="flex-grow bg-transparent p-2 focus:outline-none disabled:cursor-not-allowed"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyPress={(e) => e.key === "Enter" && handleSend()}
								disabled={isLoading}
							/>
							<button
								onClick={handleSend}
								disabled={isLoading}
								className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
							>
								<FaPaperPlane />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Advisor;
