import {SectionTag} from "../atoms/SectionTag.jsx";
import {useNavigate} from "react-router-dom";
import {SmallButton} from "../atoms/SmallButton.jsx";

export const ButtonBar = () => {
	const navigate = useNavigate();

	const navTo = (path) => {
		navigate(path);
	}
	return (
		<SectionTag>
			<div className={'flex justify-center items-center gap-x-4'}>
				<SmallButton buttonName={'Home'} onClick={() => navTo('/')} />
				<SmallButton buttonName={'About'} onClick={() => navTo('/about')} />
				<SmallButton buttonName={'Contact'} onClick={() => navTo('/contact')} />
			</div>
		</SectionTag>
	)
}