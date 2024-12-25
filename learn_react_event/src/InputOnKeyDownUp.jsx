const InputOnKeyDownUp = () => {
	return (
		<input
			onKeyDown={(e)=> {
				if(e.shiftKey && e.key === 'Enter'){
					console.log(`Shift + Enter Down`)
				} else {
					console.log(e.key, 'Down')
				}
			}}
			onKeyUp={(e)=> console.log(e.key, 'Up')}

			className={'border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out'}
		/>
	)
}
export default InputOnKeyDownUp;