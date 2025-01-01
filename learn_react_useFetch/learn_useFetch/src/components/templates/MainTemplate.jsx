import {BookList} from "../organism/BookList.jsx";

export const MainTemplate = () => {
	return (
		<main className={'container max-w-lg mx-auto p-4 space-y-6'}>
			<BookList/>
		</main>
	)
}