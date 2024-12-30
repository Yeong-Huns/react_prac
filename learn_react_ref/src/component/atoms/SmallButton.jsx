export const SmallButton = ({onClick, buttonName}) => (
	<button
		className={'bg-gray-300 rounded-lg p-2 font-semibold'}
		onClick={onClick}
	>
		{buttonName}
	</button>
)