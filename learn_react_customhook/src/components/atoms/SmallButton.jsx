export const SmallButton = ({onClick, buttonName}) => (
	<button className={'bg-gray-300 rounded-lg font-semibold p-2 focus:ring focus:outline-none focus:ring-blue-500'}
			onClick={onClick}>
		{buttonName}
	</button>
)