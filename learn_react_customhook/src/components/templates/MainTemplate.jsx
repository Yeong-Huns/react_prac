import {Counter} from "../organism/Counter.jsx";
import {WindowSize} from "../organism/WindowSize.jsx";
import {BookList} from "../organism/BookList.jsx";

export const MainTemplate = () => {
	return (
		<main className={'container max-w-lg mx-auto p-4 space-y-6'}>
			<Counter/>
			<WindowSize/>
			<BookList/>
		</main>
	)
}