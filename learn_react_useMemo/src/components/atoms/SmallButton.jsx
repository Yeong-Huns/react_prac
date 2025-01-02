export const SmallButton = ({buttonName, onClick}) => (
	<button className={'bg-gray-200 rounded-lg px-4 py-2 font-bold text-2xl'} onClick={onClick}>
		{buttonName}
	</button>
)