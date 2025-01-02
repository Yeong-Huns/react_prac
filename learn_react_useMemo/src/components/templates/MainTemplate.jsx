import {CounterSection} from "../organism/CounterSection.jsx";
import {HeavyCalculation} from "../organism/HeavyCalculation.jsx";
import {ParentWIthChild} from "../organism/ParentWIthChild.jsx";
import {ParentWIthChild2} from "../organism/ParentWithChild2.jsx";

export const MainTemplate = () => {
	return (
		<main className={'max-w-lg mx-auto'}>
			<CounterSection/>
			<HeavyCalculation/>
			<ParentWIthChild/>
			<ParentWIthChild2/>
		</main>
	)
}