import {useState} from 'react'
import './App.css'
import SmallButton from "./SmallButton.jsx";
import SmallInputBox from "./SmallInputBox.jsx";

const App = () => {
	const [count, setCount] = useState(0)
	console.log(useState(0));

	const [todos, setTodos] = useState(['React', 'Vue', 'Angular']);
	const [newTodo, setNewTodos] = useState('');

	return (
		<>
			<main className={'container max-w-4xl mx-auto px-6 py-12'}>
				<section className={'flex flex-col justify-center items-center mb-12'}>
					<h2 className={'text-2xl'}>Count: {count}</h2>
					<div>
						<SmallButton name={'+'} onClick={() => setCount(count + 1)}/>
						<SmallButton name={'-'} onClick={() => setCount(count - 1)}/>
					</div>
				</section>
				<section>
					<h2 className={'text-3xl mb-4'}>Todo List</h2>
					<ul className={'list-disc pl-5 space-y-2'}>
						{todos.map((todo, idx) => {
							return(
								<li key={idx} className={'mr-2'}>{todo}
								<SmallButton name={'삭제'} onClick={()=>setTodos(todos.filter((_,i)=> i !== idx))}/>
								</li>
							)
						})}
					</ul>
					<p>입력 : {newTodo}</p>
					<SmallInputBox value={newTodo} onChange={(e)=>setNewTodos(e.target.value)}/>
					<SmallButton name={'추가'} onClick={()=> {
						setTodos([...todos, newTodo]);
						setNewTodos('');
					}}/>
				</section>
			</main>
		</>
	)
}

export default App
