import React from "react";
import {SmallButton} from "../atoms/SmallButton.jsx";

const ChildStatus2 = ({status, onClick}) => {
	console.log('ChildStatus2 Rendering')
	return (
		<div className={'p-4'}>
			<p>Child: {status ? 'Active' : 'Deactivated'}</p>
			<SmallButton buttonName={'Increase'} onClick={onClick}/>
		</div>
	)
}

export default React.memo(ChildStatus2);