import {useState} from "react";
import TempInput from "../molecules/TempInput.jsx";
import UnitSelector from "../molecules/UnitSelector.jsx";

const TemperatureConverter = () => {
	const temperatures = ['화씨', '섭씨'];
	const [unit, setUnit] = useState(temperatures[1]);
	const [value, setValue] = useState(null);

	const convertedTemp =
		value === null
			? "--"
			: unit === temperatures[0]
				? ((value - 32) * 5 / 9).toFixed(2)
				: ((value * 9 / 5) + 32).toFixed(2);

	return (
		<section>
			<h2 className={'text-2xl font-bold'}>온도 변환기</h2>
			<p className={'text-lg font-semibold'}>변환됨: {convertedTemp ?? '--'} {temperatures[(temperatures.indexOf(unit) + 1) % 2]}</p>
			<TempInput value={value === null ? '' : value} unit={unit} onChange={setValue}/>
			<UnitSelector unit={unit} onUnitChange={setUnit}/>
		</section>
	)
}

export default TemperatureConverter;