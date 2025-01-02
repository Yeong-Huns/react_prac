import {CountComponent} from "../organism/CountComponent.jsx";
import {CountComponentContext} from "../organism/CountComponentContext.jsx";

export const MainTemplate = () => {

	return (
		<main className={'max-w-lg mx-auto'}>
			<CountComponent/>
			<CountComponentContext/>
		</main>
	)
}