import {MainTag} from "../atoms/MainTag.jsx";
import {NumberCounter} from "../organism/NumberCounter.jsx";
import {FocusInput} from "../organism/FocusInput.jsx";

export const MainTemplate = () => (
	<MainTag>
		<NumberCounter/>
		<NumberCounter/>
		<FocusInput/>
	</MainTag>
)