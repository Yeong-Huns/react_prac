import {useRef, useState} from "react";
import {SectionTag} from "../atoms/SectionTag.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";

export const NumberCounter = () => {
	const [count1, setCount1] = useState(0)
	const [count2, setCount2] = useState(0)
	const refCount = useRef(0);

	/*
	방식 1)
	let countVar = 0;
	리렌더링 시 다시 0으로 초기화됨
	*/

	const incrementRef = () => {
		refCount.current += 1;
		console.log(`Ref Count: ${refCount.current}`);
	}

	const syncCounts = () => {
		setCount1(refCount.current);
		setCount2((v)=>v+1);
	}

	return (
		<SectionTag>
			<h2 className={'text-2xl font-bold'}>Counter</h2>
			<p>Count 1: {count1}</p>
			<p>Count 2: {count2}</p>
			<div className={'flex items-center justify-center gap-x-4'}>
				<SmallButton buttonName={'useRef'} onClick={incrementRef} />
				<SmallButton buttonName={'useState'} onClick={syncCounts}/>
			</div>
		</SectionTag>
	)
}