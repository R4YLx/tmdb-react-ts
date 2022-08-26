import logo from "../assets/logo.png";

const PageNotFound = () => {
	return (
		<div className="flex justify-center py-12 h-screen">
			<div className="mockup-window border bg-base-300 w-4/5 xl:w-1/2 h-fit">
				<div className="flex flex-col justify-center px-4 py-8 bg-base-200 h-full gap-4">
					<h5 className="text-3xl md:text-8xl font-bold tracking-tight text-white text-center">
						PAGE NOT FOUND
					</h5>

					<div className="flex flex-col justify-center items-center gap-4">
						<img src={logo} className="w-28 md:w-72" alt="Movie Time Logo" />
						<p className="text-center md:text-3xl text-sm italic">
							Nothing poppin' here!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageNotFound;
