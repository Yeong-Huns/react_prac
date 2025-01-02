import React from "react";

const ChildStatus = ({status}) => {
	console.log('Child Rendered')
	return (<p>Child: {status ? 'Active' : 'Deactivated'}</p>)
}

export default React.memo(ChildStatus)