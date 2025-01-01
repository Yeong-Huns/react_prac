import {SectionTag} from "../atoms/SectionTag.jsx";
import useWindowSize from "../../hooks/useWindowSize.js";

export const WindowSize = () => {
	const { width, height } = useWindowSize();
	return (
		<SectionTag>
			<h2 className={'text-2xl font-bold'}>Window Size</h2>
			<p className={'text-lg font-semibold'}>Width: {width}</p>
			<p className={'text-lg font-semibold'}>height: {height}</p>
		</SectionTag>
	)
}