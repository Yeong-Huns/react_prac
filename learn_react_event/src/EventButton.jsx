const handleEvent = (name, e) => {
	console.log(name, e);
}

const EventButton = ({name}) => {
	return (
		<button
			onClick={(e) => handleEvent(name, e)}
			className={'bg-gray-300 border border-gray-400 rounded-lg px-6 py-2'}
		>
			{name}
		</button>
	)
}

export default EventButton;