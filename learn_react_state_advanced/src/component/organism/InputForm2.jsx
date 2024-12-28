import {useState} from "react";
import BorderGrayXLdiv from "../atoms/BorderGrayXLdiv.jsx";
import NameInputBox from "../atoms/NameInputBox.jsx";
import SubScribeBox from "../molecules/SubScribeBox.jsx";
import SelectBox from "../atoms/SelectBox.jsx";
import CheckBox from "../atoms/CheckBox.jsx";

const InputForm2 = () => {
	const [formData, setFormData] = useState(
		{
			username: "",
			isSubscribed: false,
			role: 'user'
		}
	)
	const roles = ['user', 'admin', 'guest']

	const handleChange = (e) => {
		const {name, value, type, checked} = e.target;
		setFormData({...formData, [name]: type === 'checkbox' ? checked : value})
	}

	return (
		<BorderGrayXLdiv>
			<form>
				<p>이름 : {formData.username} {formData.isSubscribed && '(구독중)'}</p>
				<p>권한 : {formData.role}</p>
				<NameInputBox
					name={'username'}
					value={formData.username}
					onChange={handleChange}
				/>
				<label>
					<CheckBox checked={formData.isSubscribed} onChange={handleChange} name={'isSubscribed'}/>
					구독하기
				</label>
				<SubScribeBox name={'role'} onChange={handleChange} value={formData.role} roles={roles} />
			</form>
		</BorderGrayXLdiv>
	)
}

export default InputForm2;