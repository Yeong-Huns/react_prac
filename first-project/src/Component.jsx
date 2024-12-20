import React, {Component} from 'react';

class ClassComponent extends Component {
	render(){
		return <div>This is Class Component</div>
	}
}

function FunctionComponent(){
	return <div>This is Function Component</div>
}

const ArrowFunctionComponent = () => <div>This is Arrow Function Component</div>

export {ClassComponent, FunctionComponent, ArrowFunctionComponent};