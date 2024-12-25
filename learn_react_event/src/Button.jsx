const Button = ({name}) => {
	return (
		<button onClick={()=> console.log(name)} className={'bg-gray-300 border border-gray-400 rounded-lg px-6 py-2'}>
			{name}
		</button>
	)
}

export default Button;