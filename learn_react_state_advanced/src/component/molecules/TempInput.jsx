import NumberInputBox from "../atoms/NumberInputBox.jsx";
import BorderGrayXLdiv from "../atoms/BorderGrayXLdiv.jsx";

const TempInput = ({value, unit, onChange}) => {
	return (
		<BorderGrayXLdiv>
			<NumberInputBox value={value} onChange={onChange} placeholder={`단위: ${unit}`}/>
			<p className={'text-lg font-semibold'}>{unit}</p>
		</BorderGrayXLdiv>
	)
}

export default TempInput;