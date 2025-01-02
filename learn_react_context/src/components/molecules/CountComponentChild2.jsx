import {SmallButton} from "../atoms/SmallButton.jsx";

export const CountComponentChild2 = ({count, onClick}) => {
	console.log('Child 2 Rendering')
	return (
		<>
			<h2 className={'text-2xl font-bold'}>Child2</h2>
			<p>Count: {count}</p>
			<SmallButton buttonName={'Increase'} onClick={onClick}/>
		</>
	)
}