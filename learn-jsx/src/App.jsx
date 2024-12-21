import './App.css'
import reactLogo from './assets/react.svg';

import ButtonA from "./ButtonA.jsx";
import ButtonB from "./ButtonB.jsx";

const App = () => {
	const disableInput = true
	const reactLogoAlt = 'React Logo';
	const headerStyle = {
		backgroundColor: 'lightgrey',
		margin: '10px',
		padding: '20px',
		borderRadius: '8px'
	}
	const divStyle = {
		backgroundColor: 'lightcyan',
		margin: '12px',
		padding: '20px',
		borderRadius: '8px',
		color: 'red'
	}
	const styleA = {
		color: 'darkred',
		fontWeight: 'bold',
	}
	const styleB = {
		color: 'navy',
		textDecoration: 'underline',
	}
	const isPrimary = true;
	return (
		<>
			<header style={headerStyle}>
				<img
					src={reactLogo}
					alt={reactLogoAlt}
					width={256}
					height={228}
				/>
				<div style={{marginTop: '10px', marginBottom: '10px'}}>
					<span style={{fontWeight: 'bold', fontStyle: 'italic', color: 'darkblue'}}>
						Bold & Italic
					</span>
				</div>
				<div style={divStyle}>
					DIV1
				</div>
				<div style={{
					...divStyle,
					backgroundColor: 'lightgreen',
					color: 'darkblue',
					fontWeight: 'bold',
				}}>
					DIV2
				</div>
				<div style={{...divStyle, backgroundColor: 'yellow'}}>
					<div style={isPrimary ? styleA : styleB}>
						이 텍스트는 동적 스타일링 적용중입니다.
					</div>
					<span style={{
						fontSize: isPrimary ? '1.5em' : '1em',
						opacity: isPrimary ? 1 : 0.5,
					}}>
						이 텍스트도
					</span>
				</div>
			</header>

			<label htmlFor="username">
				Username:
			</label>
			<input type="text" id="username"

				   className="input-field"
				   autoComplete="off"

				   maxLength={20}
				   spellCheck={true}
				   readOnly={false}
				   tabIndex={0}

				   disabled={disableInput}
				   placeholder={
					   disableInput ? 'Disabled' : 'Enter your username'
				   }
			/>
			<ButtonA />
			<ButtonB />
		</>
	)
}

export default App
