import React, {Component} from 'react';

class ClassComponent extends Component {
	render(){
		return <div>This is Class Component</div>
	}
} // 전통적인 방식의 Class 형태 . react 모듈에서 가져온 `Component` 를 상속받아 `render` 라는 메서드를 사용해 return 한다.

function FunctionComponent(){
	return <div>This is Function Component</div>
} // 기본형태(함수)

const ArrowFunctionComponent = () => <div>This is Arrow Function Component</div>
// 제일 최신 형식의 화살표 함수 방식

export {ClassComponent, FunctionComponent, ArrowFunctionComponent};