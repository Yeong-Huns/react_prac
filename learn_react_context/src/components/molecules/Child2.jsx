import {useContext} from "react";
import {CountContext} from "../../contexts/CountContext.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";

export const Child2 = () => {
	const {count, setCount} = useContext(CountContext);
	console.log('Child2');
	return (
		<>
			<h2 className={'text-2xl font-bold'}>Child2</h2>
			<p>Count: {count}</p>
			<SmallButton buttonName={'Increase'} onClick={()=> setCount(prev => prev + 1)}/>
		</>
	)
}