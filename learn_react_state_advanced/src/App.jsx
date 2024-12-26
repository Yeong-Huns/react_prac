import './App.css'
import {useState} from "react";
import MiniButton from "./component/atoms/MiniButton.jsx";
import Profile from "./component/organism/Profile.jsx";
import TemperatureConverter from "./component/organism/TemperatureConverter.jsx";


const App = () => {
	const users = ['Alice', 'Bob', 'Clarke', 'David'];
	const [user, setUser] = useState(users[0]);
	const [status, setStatus] = useState(true);

	console.log('App 렌더링 완료')

	return (
		<>
		<section className={'max-w-3xl mx-auto p-4'}>
			<h2 className={'text-2xl mb-2'}>유저 정보</h2>
			<div className={'flex gap-x-2 p-4'}>
				<MiniButton onClick={() => setStatus(v => !v)} name={'상태 변경'}/>
				<MiniButton onClick={() => setUser(u => users[(users.indexOf(u) + 1) % users.length])} name={'유저 변경'}/>
			</div>
			<p className={'text-lg font-bold'}>{status ? 'onLine' : 'offLine'}</p>
			<Profile name={user}/>
		</section>
		<section className={'max-w-3xl mx-auto p-4'}>
			<TemperatureConverter/>
		</section>
		</>
	)
}

export default App
