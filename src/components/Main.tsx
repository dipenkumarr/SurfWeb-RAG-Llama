"use client";

import { Button } from "@nextui-org/react";
import { CopyIcon, Link2 } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1 flex flex-col">
				<Hero />
				<HowItWorks />
			</main>
			<Footer />
		</div>
	);
}

function Hero() {
	return (
		<section className="flex-1 flex flex-col items-center justify-center w-full py-20 bg-gradient-to-r from-purple-500 to-indigo-600 p-10">
			<div className="text-5xl underline font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl p-6">
				SurfWeb
			</div>
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center gap-8 text-center">
					<h1 className="text-4xl font-bold tracking-tighter text-gray-50 sm:text-5xl md:text-6xl lg:text-7xl">
						Chat with any website
					</h1>
					<p className="mx-auto max-w-[700px] text-xl text-white/80 md:text-2xl">
						This web application allows you to chat with any
						website, no matter what it&apos;s built on.
					</p>
				</div>
			</div>
		</section>
	);
}

function HowItWorks() {
	return (
		<section className="w-full py-20 bg-gray-50">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center gap-6 text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
						How It Works
					</h2>
					<p className="mx-auto max-w-[700px] text-xl text-gray-600">
						This 3-step process makes it easy to chat with any
						website.
					</p>
				</div>
				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
					<StepCard
						icon={
							<PencilIcon className="h-16 w-16 text-purple-600" />
						}
						title="1. Enter URL Prefix"
						description="Start by entering the special URL prefix for the website you want to chat with."
					/>
					<StepCard
						icon={
							<DatabaseIcon className="h-16 w-16 text-purple-600" />
						}
						title="2. Index Page"
						description="Our app will create an index of the page and store it in a secure vector database."
					/>
					<StepCard
						icon={
							<WebcamIcon className="h-16 w-16 text-purple-600" />
						}
						title="3. Chat & Interact"
						description="Ask questions and interact with the website&#39;s content in real-time."
					/>
				</div>

				<div className="flex items-center justify-center mt-14">
					<div className="p-4 bg-gray-100 border border-border rounded-2xl w-3/4 sm:w-2/4">
						<div className="w-full flex justify-between items-center">
							<div className="flex items-center gap-2 overflow-hidden">
								<Link2 className="h-6 w-6 text-gray-900" />
								<span className="text-gray-900">
									{window.location.href.replace(
										"http://",
										""
									)}
								</span>
							</div>
							<button
								className="text-gray-500 hover:text-gray-700 transition-all"
								onClick={() =>
									navigator.clipboard.writeText(
										window.location.href.replace(
											"http://",
											""
										)
									)
								}
							>
								<CopyIcon className="h-6 w-6" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function StepCard({ icon, title, description }: any) {
	return (
		<div className="flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-lg">
			{icon}
			<h3 className="text-2xl font-bold text-gray-900">{title}</h3>
			<p className="text-gray-600 text-center text-lg">{description}</p>
		</div>
	);
}

function Footer() {
	return (
		<footer className="w-full py-6 bg-gray-100">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col sm:flex-row justify-between items-center">
					<p className="text-sm text-gray-600 mb-4 sm:mb-0">
						&copy; 2024 SurfWeb. All rights reserved.
					</p>
					<nav className="flex gap-6">
						<Link
							href="#"
							className="text-sm text-gray-600 hover:underline underline-offset-4"
						>
							Terms of Service
						</Link>
						<Link
							href="#"
							className="text-sm text-gray-600 hover:underline underline-offset-4"
						>
							Privacy
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
}

function DatabaseIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<ellipse cx="12" cy="5" rx="9" ry="3" />
			<path d="M3 5V19A9 3 0 0 0 21 19V5" />
			<path d="M3 12A9 3 0 0 0 21 12" />
		</svg>
	);
}

function PencilIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
			<path d="m15 5 4 4" />
		</svg>
	);
}

function WebcamIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="10" r="8" />
			<circle cx="12" cy="10" r="3" />
			<path d="M7 22h10" />
			<path d="M12 22v-4" />
		</svg>
	);
}
