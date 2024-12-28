const CheckBox = ({checkedValue, onChange, name}) => (
	<input
	type="checkbox"
	checked={checkedValue}
	name={name}
	onChange={onChange}
	className={'border border-gray-300 rounded-md'}
	/>
)

export default CheckBox;