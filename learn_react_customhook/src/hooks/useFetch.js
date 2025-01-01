/**
 * fileName       : useFetch
 * author         : Yeong-Huns
 * date           : 2025-01-02
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2025-01-02        Yeong-Huns       최초 생성
 */

import {useState, useEffect} from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Error fetching data');
				}
				const result = await response.json();
				setData(result);
			} catch (error) { setError(error.message); }
			finally { setLoading(false); }
		}
		fetchData();
	}, []);

	return { data, loading, error };
}
