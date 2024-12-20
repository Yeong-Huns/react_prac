import Child from './Child'
import {ClassComponent, ArrowFunctionComponent, FunctionComponent} from './Component'

const Hello = () => <h1>Hello</h1>


function App() {
	return (
		<>
			<Hello/>
			<h2>World!</h2>
            <Child/>
			<ClassComponent/>
			<FunctionComponent/>
			<ArrowFunctionComponent/>
		</>
	)
}

export default App
