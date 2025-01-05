export const SmallButton = ({buttonName, onClick}) => (
	<button className={'bg-gray-200 text-xl font-bold p-4 rounded-lg'} onClick={onClick}>
		{buttonName}
	</button>
)