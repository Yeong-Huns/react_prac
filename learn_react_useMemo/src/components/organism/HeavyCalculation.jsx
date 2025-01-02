import {useEffect, useMemo, useState} from "react";
import {SectionTag} from "../atoms/SectionTag.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";

export const HeavyCalculation = () => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	const heavyCalc = (num) => {
		console.log('Calculation...');
		let result = 0;
		for(let i = 0; i < 1000000000; i++) {
			result += num;
		}
		return result;
	}

	useEffect(() => {
		console.log('Mounted!')
		return () => console.log('unmounted!');
	}, [])

	useEffect(() => {
		console.log('Render Complete!');
	}, [count1])

	const calculatedValue = useMemo(() => {
		return heavyCalc(count2);
	}, [count2]);

	return (
		<SectionTag>
			<div className={'p-4'}>
				<h2 className={'text-2xl font-semibold'}>Counter 1 : {count1}</h2>
				<div className={'flex gap-x-4 justify-center items-center'}>
					<SmallButton buttonName={'+'} onClick={()=> setCount1(prev => prev + 1)}/>
					<SmallButton buttonName={'-'} onClick={() => setCount1(prev => prev - 1)}/>
				</div>
			</div>
			<div className={'p-4'}>
				<h2 className={'text-2xl font-semibold'}>Counter 2 : {calculatedValue}</h2>
				<div className={'flex gap-x-4 justify-center items-center'}>
					<SmallButton buttonName={'+'} onClick={() => setCount2(prev => prev + 1)}/>
					<SmallButton buttonName={'-'} onClick={() => setCount2(prev => prev - 1)}/>
				</div>
			</div>
		</SectionTag>
	)
}