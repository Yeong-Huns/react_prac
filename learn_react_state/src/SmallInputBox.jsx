const SmallInputBox = ({onChange, value}) => (
	<input
		type={'text'}
		value={value}
		onChange={onChange}
		className={'text-xl font-bold p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ease-in-out transition'}/>
)
export default SmallInputBox;