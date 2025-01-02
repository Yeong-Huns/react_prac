import {useCallback, useState} from "react";
import {SectionTag} from "../atoms/SectionTag.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";
import ChildStatus2 from "../molecules/ChildStatus2.jsx";

export const ParentWIthChild2 = () => {
	const [count, setCount] = useState(0)
	const [status, setStatus] = useState(false)

	const handleClick = useCallback(
		()=> {
			setCount(prev => prev + 1)
		}, []
	)

	return (
		<SectionTag>
			<h2 className={'text-2xl font-bold'}>Parent</h2>
			<div className={'flex justify-center items-center gap-x-4'}>
				<SmallButton buttonName={'Toggle Active'} onClick={() => setStatus(prev => !prev)}/>
			</div>
			<p>Count: {count}</p>
			<ChildStatus2 status={status} onClick={handleClick}/>
		</SectionTag>
	)
}