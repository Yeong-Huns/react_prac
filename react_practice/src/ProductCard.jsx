const ProductCard = ({name, price, formatPrice}) => {
	const displayPrice = formatPrice(price);

	return(
		<div className={'border w-56 border-gray-300 rounded-lg shadow-md mx-auto p-6 my-3'}>
			<h2 className={'font-bold text-2xl'}>{name}</h2>
			<p className={'text-lg text-gray-400'}>가격: {displayPrice}</p>
		</div>
	)
}

export default ProductCard;