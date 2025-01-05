import {SectionTag} from "../components/atoms/SectionTag.jsx";
import {Outlet} from "react-router-dom";

const Home = () => (
	<SectionTag>
		<h2 className={'text-2xl font-bold'}>Home</h2>
		<p>
			Welcome to Web Dev Class!
		</p>
		<Outlet/>
	</SectionTag>
)

export default Home