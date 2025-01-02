import {useState} from "react";
import {SmallButton} from "../atoms/SmallButton.jsx";

export const Counter = () => {
	const [count, setCount] = useState(0);

	return(
		<div className={'p-4'}>
			<h2 className={'text-2xl font-semibold'}>Counter : {count}</h2>
			<div className={'flex gap-x-4 justify-center items-center'}>
				<SmallButton buttonName={'+'} onClick={() => setCount(prev => prev + 1)} />
				<SmallButton buttonName={'-'} onClick={() => setCount(prev => prev - 1)} />
			</div>
		</div>
	)
}