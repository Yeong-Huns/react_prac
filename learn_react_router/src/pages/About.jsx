const About = () => (
	<>
		<h2>About</h2>
		<ul>
			{['HTML','CSS','Javascript'].map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	</>
)

export default About;