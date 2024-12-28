import './App.css'
import {useReducer} from "react";
import {init, userReducer} from "./reducers/userReducer.js";
import {externalData} from "./data/data.js";
import {countReducer, initialState} from "./reducers/countReducer.js";
import {CountButton} from "./component/atoms/CountButton.jsx";


function App() {
	const [state, dispatch] = useReducer(userReducer, externalData, init);
	const [state2, dispatch2] = useReducer(countReducer, initialState)

	const handleClick = (type, value, event) => {
		const { clientX: x, clientY: y } = event;
		dispatch2({
			type,
			payload: {value},
			meta: {x, y}
		})
	}

	return (
		<div>
			<section className={'border border-gray-300 p-4 container max-w-lg mx-auto rounded-lg space-y-2'}>
				<input
					className={'w-full border border-gray-300 rounded-md p-4'}
					placeholder={'Enter Your Name'}
					type={'text'}
					value={state.name}
					onChange={e => dispatch({type: 'SET_NAME', payload: e.target.value})}/>

				<input
					className={'w-full border border-gray-300 rounded-md p-4'}
					placeholder={'Enter Your Birth year'}
					type={'number'}
					value={state.age}
					onChange={e => dispatch({type: 'SET_AGE', payload: e.target.value})}/>
				{state.warning && <p className={'text-2xl text-red-400 font-semibold'}>{state.warning}</p>}
				<p className={'text-xl font-semibold'}>Name : {state.name}</p>
				<p className={'text-xl font-semibold'}>Year: {state.age}</p>
				<button
					className={'text-xl font-bold bg-gray-300 rounded-lg p-2'}
					onClick={() => dispatch({type: 'RESET', payload: externalData})}
				>RESET
				</button>
			</section>
			<section className={'border border-gray-300 p-4 container max-w-lg mx-auto rounded-lg space-y-2'}>
				<p>Count: {state2.count}</p>
				<div className={'flex items-center justify-center gap-x-4'}>
				<CountButton value={'+1'} onClick={(e)=>handleClick('INCREMENT', 1, e)}/>
				<CountButton value={'-1'} onClick={(e)=>handleClick('DECREMENT', 1, e)}/>
				<CountButton value={'+2'} onClick={(e)=>handleClick('INCREMENT', 2, e)}/>
				<CountButton value={'-1'} onClick={(e)=>handleClick('DECREMENT', 2, e)}/>
				</div>
			</section>
		</div>
	)
}

export default App
