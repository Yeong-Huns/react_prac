const SelectBox = ({value, onChange, roles, name}) => (
	<select
		name={name}
		value={value}
		onChange={onChange}
	>
		{roles.map(role => (<option key={role} value={role}>{role}</option>))}
	</select>
)

export default SelectBox;