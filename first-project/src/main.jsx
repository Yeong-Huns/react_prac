import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root'))
	.render(
		<StrictMode>
			{/*태그가 덜 닫히거나 JSX 문법기준에 맞지않으면 오류를 냄*/}
			<App/>
		</StrictMode>,
	)
