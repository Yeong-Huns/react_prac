import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export const LocationSearch = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const keyword = queryParams.get('keyword');

	useEffect(() => {
		console.log(`Current location: ${location.pathname}`);
		console.log(`Query Parameters (keyword): ${keyword}`);
	},[keyword, location]);

	return <h1 className={'text-3xl font-bold'}>Search Keyword: {keyword}</h1>
}