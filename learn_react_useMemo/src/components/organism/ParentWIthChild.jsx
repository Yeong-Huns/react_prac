import {useState} from "react";
import {SectionTag} from "../atoms/SectionTag.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";
import ChildStatus from "../molecules/ChildStatus.jsx";


export const ParentWIthChild = () => {
	const [count, setCount] = useState(0)
	const [status, setStatus] = useState(false)

	return (
		<SectionTag>
			<h2 className={'text-2xl font-bold'}>Parent</h2>
			<div className={'flex justify-center items-center gap-x-4'}>
				<SmallButton buttonName={'Increase'} onClick={() => setCount(prev => prev + 1)}/>
				<SmallButton buttonName={'Toggle Active'} onClick={() => setStatus(prev => !prev)}/>
			</div>
			<p>Count: {count}</p>
			<ChildStatus status={status}/>
		</SectionTag>
	)
}