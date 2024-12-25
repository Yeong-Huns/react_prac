const InputOnchange = () => {
	return (
		<input
		 onChange={(e)=> console.log(e.target.value)}
		 className={'border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out'}
		/>
	)
}

export default InputOnchange;