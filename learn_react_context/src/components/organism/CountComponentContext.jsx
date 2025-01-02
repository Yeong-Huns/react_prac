import {SectionTag} from "../atoms/SectionTag.jsx";
import {useState} from "react";
import {CountProvider} from "../../contexts/CountContext.jsx";
import {Child1} from "../molecules/Child1.jsx";
import {ToggleProvider} from "../../contexts/ToggleContext.jsx";
import {Child3} from "../molecules/Child3.jsx";

export const CountComponentContext = () => {
	const [count, setCount] = useState(0);
	console.log('Parent Rendering')
	return (
		<SectionTag>
			<CountProvider>
				<h2 className={'text-2xl font-bold'}>APP</h2>
				<Child1/>
			</CountProvider>
			<ToggleProvider>
				<Child3/>
			</ToggleProvider>
		</SectionTag>
	)
}