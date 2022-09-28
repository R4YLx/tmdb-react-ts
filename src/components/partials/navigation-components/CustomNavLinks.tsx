import { Navbar } from "flowbite-react";
import { useLocation, useLinkClickHandler } from "react-router-dom";

interface NavLinkProps {
	to: string;
	children: React.ReactNode;
}

//* Custom navlink to combine React Router NavLink and Flowbite NavLink

export const NavLink = ({ to, children }: NavLinkProps) => {
	//* Find location
	const location = useLocation();
	const clickHandler = useLinkClickHandler(to);

	return (
		<span onClick={clickHandler}>
			<Navbar.Link href={to} active={location.pathname === to}>
				{children}
			</Navbar.Link>
		</span>
	);
};

export const NavbarBrand = ({ to, children }: NavLinkProps) => {
	const clickHandler = useLinkClickHandler(to);

	return (
		<span onClick={clickHandler}>
			<Navbar.Brand href={to}>{children}</Navbar.Brand>
		</span>
	);
};
