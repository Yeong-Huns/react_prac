const SimpleCard = ({title, content}) => {
	return (
		<div>
			<h2 className={'text-2xl font-bold'}>{title}</h2>
			<p>{content}</p>
		</div>
	)
}

export default SimpleCard;