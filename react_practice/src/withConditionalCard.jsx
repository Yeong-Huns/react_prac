const withConditionalCard = (Component) => ({disabled, ...props}) => {
	const cardStyle = {
		opacity: disabled ? 0.5 : 1,
	}
	return (
		<div className={'border w-56 border-gray-300 rounded-lg shadow-md mx-auto p-6 my-3'} style={cardStyle}>
			<Component{...props} />
		</div>
	)
}

export default withConditionalCard;