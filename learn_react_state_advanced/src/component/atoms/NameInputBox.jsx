const NameInputBox = ({value, onChange, name}) => (
	<input
		name={name}
		type={'text'}
		value={value}
		onChange={onChange}
		placeholder={'이름을 입력하세요.'}
		className={'border border-gray-300 rounded-md p-2'}
	/>
)

export default NameInputBox;