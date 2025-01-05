import {SectionTag} from "../components/atoms/SectionTag.jsx";

const About = () => (
	<SectionTag>
		<h2 className={'font-bold text-2xl'}>About</h2>
		<ul>
			{['HTML','CSS','Javascript'].map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	</SectionTag>
)

export default About;