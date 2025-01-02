import {useContext} from "react";
import {ToggleContext} from "../../contexts/ToggleContext.jsx";
import {Child4} from "./Child4.jsx";

export const Child3 = () => {
	const {isOn} = useContext(ToggleContext);
	console.log('Child3');
	return (
		<>
			<h2 className={'text-2xl font-bold'}>Child3</h2>
			<p>
				Toggle {isOn ? 'On' : 'Off'}
			</p>
			<Child4/>
		</>
	)
}