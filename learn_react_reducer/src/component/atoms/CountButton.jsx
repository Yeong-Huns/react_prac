export const CountButton = ({onClick, value}) => (
	<button
		className={'bg-gray-300 rounded-lg p-2 font-semibold'}
		onClick={onClick}
	>{value}</button>
)