const RadioInputBox = ({value, checked, onChange}) => (
	<label>
		<input
			type={'radio'}
			value={value}
			checked={checked}
			onChange={e => onChange(e.target.value)}
		/>
		{value}
	</label>
)

export default RadioInputBox;