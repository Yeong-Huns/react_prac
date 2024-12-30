import './App.css'
import {UserForm} from "./component/organism/UserForm.jsx";
import {Calculator} from "./component/organism/Calculator.jsx";
import {CustomUserForm} from "./component/organism/CustomUserForm.jsx";


function App() {

	return (
		<div>
			<UserForm/>
			<Calculator/>
			<CustomUserForm/>
		</div>
	)
}

export default App
