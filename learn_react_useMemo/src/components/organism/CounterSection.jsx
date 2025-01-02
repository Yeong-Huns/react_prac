import {SectionTag} from "../atoms/SectionTag.jsx";
import {Counter} from "../molecules/Counter.jsx";

export const CounterSection = () => {
	return (
		<SectionTag>
			<Counter/>
			<Counter/>
		</SectionTag>
	)
}