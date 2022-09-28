import { Navbar } from "flowbite-react";
import { NavLink, NavbarBrand } from "./navigation-components/CustomNavLinks";
import logo from "../../assets/logo.png";

const Navigation = () => {
	return (
		<Navbar fluid={true} rounded={false}>
			<NavbarBrand to="/">
				{/* Logo */}
				<img src={logo} className="mr-3 w-10 md:w-12" alt="Movie Time Logo" />

				{/* App name  */}
				<span className="self-center whitespace-nowrap text-lg font-bold text-indigo-900">
					Popcorn Time
					<p className="text-xs text-indigo-900 text-opacity-60">
						Let’s go to the movies!
					</p>
				</span>
			</NavbarBrand>

			<Navbar.Toggle />

			<Navbar.Collapse>
				{/* Home */}
				<NavLink to="/">
					<span className="text-base">Home</span>
				</NavLink>

				{/* Playing */}
				<NavLink to="/now-playing">
					<span className="text-base">Now Playing</span>
				</NavLink>

				{/* Popular */}
				<NavLink to="/popular">
					<span className="text-base">Popular Movies</span>
				</NavLink>

				{/* Top Rated */}

				<NavLink to="top-rated">
					<span className="text-base">Top Rated Movies</span>
				</NavLink>

				{/* Playing */}
				<NavLink to="/search">
					<span className="text-base flex items-center gap-1">
						Search
						<div>
							<svg
								fill={location.pathname === "/search" ? "#2C55D3" : "#394150"}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 30 30"
								width="22px"
								height="22px"
							>
								<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
							</svg>
						</div>
					</span>
				</NavLink>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
