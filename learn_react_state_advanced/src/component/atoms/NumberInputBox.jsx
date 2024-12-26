const NumberInputBox = ({value, onChange, placeholder}) => (
	<input
		type={'number'}
		value={value}
		onChange={e=> onChange(e.target.value)}
		placeholder={placeholder}
		className={'border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ease-in-out duration-300'}
	/>
)

export default NumberInputBox;