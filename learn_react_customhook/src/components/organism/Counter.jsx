import {SectionTag} from "../atoms/SectionTag.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";
import UseCounter from "../../hooks/useCounter.js";

export const Counter = () => {
	const {count, increment, decrement} = UseCounter(0)
	return (
		<SectionTag>
			<h2 className={'text-2xl font-bold'}>Counter : {count}</h2>
			<div className={'flex items-center justify-center gap-x-4'}>
				<SmallButton buttonName={'Increment'} onClick={increment}/>
				<SmallButton buttonName={'Decrement'} onClick={decrement}/>
			</div>
		</SectionTag>
	)
}