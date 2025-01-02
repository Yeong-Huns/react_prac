import {CountComponentChild2} from "./CountComponentChild2.jsx";

export const CountComponentChild1 = ({count, onClick}) => {
	console.log('Child 1 Rendering')
	return (
		<>
			<h2 className={'text-2xl font-bold'}>Child</h2>
			<CountComponentChild2 count={count} onClick={onClick}/>
		</>
	)
}