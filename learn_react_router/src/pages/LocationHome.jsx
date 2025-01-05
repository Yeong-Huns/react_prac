import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export const LocationHome = () => {
	const location = useLocation();

	useEffect(() => {
		console.log(`현재 경로 : ${location.pathname}`);
	}, [location])

	return <h1 className={'text-3xl font-bold'}>Home</h1>
}