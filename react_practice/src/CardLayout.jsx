const CardLayout = ({title, children}) => (
	<div className={'border w-80 border-gray-300 rounded-lg shadow-md mx-auto p-6 my-3'}>
		<h2 className={'text-2xl font-bold font-'}>{title}</h2>
		<div>
			{children}
		</div>
	</div>
)


export default CardLayout;