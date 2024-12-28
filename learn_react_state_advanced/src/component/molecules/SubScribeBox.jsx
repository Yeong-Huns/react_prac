import SelectBox from "../atoms/SelectBox.jsx";

const SubScribeBox = ({value, onChange, roles, name}) => (
	<label>
		<SelectBox name={name} value={value} onChange={onChange} roles={roles}/>
	</label>
)

export default SubScribeBox;
