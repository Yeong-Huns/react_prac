export const SmallButton = ({buttonName, onClick}) => (
	<button onClick={onClick} className={'bg-gray-200 rounded-lg p-4 text-xl font-semibold focus:outline-none focus:ring focus:ring-blue-300'}>
		{buttonName}
	</button>
)