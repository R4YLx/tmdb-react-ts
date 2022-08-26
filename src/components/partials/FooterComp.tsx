import React from "react";

type ClassNames = {
	className?: string;
};

const FooterComp: React.FC<ClassNames> = () => {
	return (
		<footer className="footer footer-center py-2 px-4 bg-white text-base-content rounded-t z-50">
			<div className="grid grid-rows-2 gap-2 w-full py-2 md:gap-4 md:grid md:grid-cols-3 md:grid-rows-none md:justify-self-start md:px-14">
				{/* Links section */}
				<div className="flex gap-8 items-center md:justify-self-start md:grid md:gap-1 lg:flex lg:gap-4">
					<a className="link link-hover text-indigo-800" href="/">
						About
					</a>
					<a className="link link-hover text-indigo-800" href="/">
						Privacy Policy
					</a>
					<a className="link link-hover text-indigo-800" href="/">
						Contact
					</a>
					<a
						target="_blank"
						href="https://github.com/R4YLx/tmdb-movie-database"
						className="md:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="fill-indigo-800 hover:fill-purple-600"
						>
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
					</a>
				</div>

				{/* Copyright and rights section */}

				<p className="md:col-start-2">
					Copyright © 2022 - All right reserved by Popcorn Time Ltd
				</p>

				{/* Github and socials section */}
				<div className="hidden md:grid md:grid-flow-col md:gap-2 md:pb-2 md:self-center md:col-start-3 md:justify-self-end">
					<a
						target="_blank"
						href="https://github.com/R4YLx/tmdb-movie-database"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="fill-indigo-800 hover:fill-purple-600"
						>
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default FooterComp;
