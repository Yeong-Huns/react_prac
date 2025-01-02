import {SectionTag} from "../atoms/SectionTag.jsx";
import {CountComponentChild1} from "../molecules/CountComponentChild1.jsx";
import {useState} from "react";

export const CountComponent = () => {
	const [count, setCount] = useState(0);
	console.log('Parent Rendering')
	return(
		<SectionTag>
			<h2 className={'text-2xl font-bold'}>APP</h2>
			<CountComponentChild1 count={count} onClick={() => setCount(prev => prev + 1)}/>
		</SectionTag>
	)
}