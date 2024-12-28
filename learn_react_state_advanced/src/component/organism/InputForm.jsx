import {useState} from "react";
import BorderGrayXLdiv from "../atoms/BorderGrayXLdiv.jsx";
import NameInputBox from "../atoms/NameInputBox.jsx";
import SubScribeBox from "../molecules/SubScribeBox.jsx";
import CheckBox from "../atoms/CheckBox.jsx";

const InputForm = () => {
	const [username, setUsername] = useState('')
	const [isSubscribed, setIsSubscribed] = useState(false)
	const [role, setRole] = useState('user')
	const roles = ['user', 'admin', 'guest'];

	return (
		<BorderGrayXLdiv>
			<form>
				<p>이름 : {username} {isSubscribed && '(구독중)'}</p>
				<p>권한 : {role}</p>
				<NameInputBox value={username} onChange={e  => setUsername(e.target.value)} />
				<label>
					<CheckBox onChange={e => setIsSubscribed(e.target.checked)} checkedValue={isSubscribed}/>
					구독
				</label>
				<SubScribeBox value={role} onChange={e => setRole(e.target.value)} roles={roles}/>
			</form>
		</BorderGrayXLdiv>
	)
}

export default InputForm;