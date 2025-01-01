import {useFetch} from "../../hooks/useFetch.js";
import {SectionTag} from "../atoms/SectionTag.jsx";
import {BookListUl} from "../molecules/BookListUl.jsx";

export const BookList = () => {
	const { data, loading, error } = useFetch('http://localhost:3000/books');
	/*const loading = false;
	const error = false;
	const data = [
		{
			id: 1,
			title: 'hello',
			author: 'me'
		}
	]*/
	return (
		<SectionTag>
			<h2 className={'text-2xl font-bold'}>Book List</h2>
			{loading ? <p className={'text-lg font-semibold'}>Loading...</p>
			: error ? <p className={'text-lg font-semibold'}>Error: {'error'}</p>
			: <BookListUl data={data}/>}
		</SectionTag>
	)
}