import {forwardRef} from "react";

export const TextInput = forwardRef(({placeholder, className}, ref) => {
	const basicClassName = 'p-2 border border-gray-200 rounded-md';

	return (
		<input
			type={'text'}
			className={`${basicClassName} ${className || ''}`.trim()}
			placeholder={placeholder}
			ref={ref ?? null}
		/>
	)
})