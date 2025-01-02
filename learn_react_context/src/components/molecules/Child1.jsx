import {Child2} from "./Child2.jsx";

export const Child1 = () => {
	console.log("Child1");
	return (
		<>
			<h2 className={'text-2xl font-bold'}>Child</h2>
			<Child2/>
		</>
	)
}

