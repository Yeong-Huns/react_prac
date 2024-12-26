import {useState} from "react";
import MiniButton from "../atoms/MiniButton.jsx";

const Profile = ({name}) => {
	const [status, setStatus] = useState('onLine');

	console.log('Profile 렌더링 완료');

	return (
		<div className={'border-2 border-gray-500 rounded-lg p-4 max-w-lg mx-auto'}>
			<h3 className={'text-2xl font-bold'}>이름: {name}</h3>
			<p className={'text-lg font-semibold'}>상태: {status}</p>
			<div className={'flex gap-x-2 p-2'}>
				<MiniButton name={'오프라인 전환'} onClick={()=> setStatus('offLine')}/>
				<MiniButton name={'온라인 전환'} onClick={()=> setStatus('onLine')}/>
			</div>
		</div>
	)
}

export default Profile;