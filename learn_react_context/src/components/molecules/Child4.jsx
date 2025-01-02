import {useContext} from "react";
import {ToggleContext} from "../../contexts/ToggleContext.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";

export const Child4 = () => {
	const { toggle }= useContext(ToggleContext);
	console.log('Child4');
	return (
		<>
			<h2 className={'text-2xl font-bold'}>Child4</h2>
			<SmallButton onClick={toggle} buttonName={'Toggle'}/>
		</>
	)
}