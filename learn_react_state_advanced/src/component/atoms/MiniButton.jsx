const MiniButton = ({name, onClick}) => (
	<button onClick={onClick} className={'p-2 text-lg bg-gray-300 rounded-lg font-bold active:ring-2 active: ring-blue-500 ease-in-out'}>{name}</button>
)

export default MiniButton;