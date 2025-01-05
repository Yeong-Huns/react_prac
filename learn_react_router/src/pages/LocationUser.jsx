import {useLocation, useParams} from "react-router-dom";
import {useEffect} from "react";

export const LocationUser = () => {
	const { id } = useParams();
	const location = useLocation();

	useEffect(() => {
		console.log(`현재 경로 : ${location.pathname}`);
		console.log(`URL Parameter (id) : ${id}`);
	},[id, location]);
	return <h1 className={'text-3xl font-bold'}>User ID : {id}</h1>
}