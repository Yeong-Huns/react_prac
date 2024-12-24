const InfoCard = ({title='(타이틀이 없습니다.)', content, author='익명'}) => (
	<div className={"w-56 mx-auto my-3 p-6 border border-gray-300 rounded-lg shadow-md"}>
		<h2 className={'mb-2 text-xl text-gray-800 font-bold'}>{title}</h2>
		<p className={'my-1'}>{content}</p>
		<p className={'my-1 text-sm text-gray-500'}>작가: {author}</p>
	</div>
)

export default InfoCard;