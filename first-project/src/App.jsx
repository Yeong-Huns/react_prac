import Child from './Child'
import {ClassComponent, ArrowFunctionComponent, FunctionComponent} from './Component'
// 구조 분해 할당

const Hello = () => <h1>Hello</h1>
// return 생략가능

function App() {
	return (
		<>
			{/*<></> : 이런걸 프래그먼트라고함 (상위에 <div></div> 태그를 만드는 대신 더 권장되는 방법)*/}
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
