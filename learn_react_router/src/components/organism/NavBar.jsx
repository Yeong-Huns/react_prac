import {Link} from "react-router-dom";

export const NavBar = () => (
	<nav className={'space-x-4'}>
		<Link to={'/'}>Home</Link>
		<Link to={'/about'}>about</Link>
		<Link to={'/contact'}>Contact</Link>
	</nav>
)