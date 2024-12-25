const SmallButton = ({name, onClick}) => (
	<button
		onClick={onClick}
		className={'text-xl font-bold p-2 bg-gray-400 rounded-lg active:ring-2 active:ring-blue-500 ease-in-out'}>
		{name}
	</button>
)

export default SmallButton;