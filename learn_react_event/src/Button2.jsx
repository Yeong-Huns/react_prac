const handleChange = (which, name) => {
	console.log(name, which);
}

const Button2 = ({name}) => (
	<button
		onMouseEnter={()=> handleChange('mouseEnter', name)}
		onMouseLeave={()=> handleChange('mouseLeave', name)}
		onDoubleClick={()=> handleChange('doubleClick', name)}
		onContextMenu={()=> handleChange('contextMenu', name)}
		className={'bg-gray-300 border border-gray-400 rounded-lg px-6 py-2'}
	>
		{name}
	</button>
)

export default Button2;