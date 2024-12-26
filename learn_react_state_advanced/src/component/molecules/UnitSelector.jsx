import BorderGrayXLdiv from "../atoms/BorderGrayXLdiv.jsx";
import RadioInputBox from "../atoms/RadioInputBox.jsx";

const UnitSelector = ({unit, onUnitChange}) => {
	return (
		<BorderGrayXLdiv>
			<RadioInputBox name={'temp'} value={'섭씨'} checked={unit === '섭씨'} onChange={onUnitChange}/>
			<RadioInputBox name={'temp'} value={'화씨'} checked={unit === '화씨'} onChange={onUnitChange}/>
		</BorderGrayXLdiv>
	)
}

export default UnitSelector;