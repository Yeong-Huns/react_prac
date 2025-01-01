export const BookListUl = ({data}) => (
	<ul className={'list-disc pl-5'}>
		{data.map(item => (
			<li key={item.id}>
				<strong>{item.title}</strong> by {item.author}
			</li>
		))}
	</ul>
)