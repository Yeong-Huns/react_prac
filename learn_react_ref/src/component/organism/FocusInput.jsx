import {SectionTag} from "../atoms/SectionTag.jsx";
import {TextInput} from "../atoms/TextInput.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";
import {useRef} from "react";

export const FocusInput = () => {
	const inputRef = useRef(null);

	const handleFocus = () => {
		console.log(inputRef.current);
		inputRef.current.focus();
	}

	return (
		<SectionTag>
			{/*
			<input ref={inputRef} type={'text'} placeholder={'Enter Focus Input...'} />
			직접적인 DOM 요소를 조작할때 ref 전달가능
			but 사용자 지정 컴포넌트는 forwardRef() 함수로 한번 감싸야 전달가능
			TextInput 컴포넌트에 전달된 inputRef 는 컴포넌트 내부의 <input/> 태그와 바인딩된다.
			*/}
			<div className={'flex justify-around items-center gap-x-4'}>
				<TextInput className={'flex-auto'} ref={inputRef} placeholder={'Type...'}/>
				<SmallButton buttonName={'Focus Input'} onClick={handleFocus}/>
			</div>
		</SectionTag>
	)
}

