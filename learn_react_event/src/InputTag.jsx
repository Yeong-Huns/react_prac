const InputTag = () => {
	return <input
		onFocus={() => console.log('focus')}
		onBlur={() => console.log('blur')}
		className={'border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300'}
	/>
}

export default InputTag;