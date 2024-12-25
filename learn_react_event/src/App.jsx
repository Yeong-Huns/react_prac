import './App.css'
import Button from "./Button.jsx";
import Button2 from "./Button2.jsx";
import EventButton from "./EventButton.jsx";
import InputTag from "./InputTag.jsx";
import InputOnchange from "./InputOnchange.jsx";
import InputOnKeyDownUp from "./InputOnKeyDownUp.jsx";

const ButtonList = [
	{idx: 1, name: 'Home'},
	{idx: 2, name: 'about'},
	{idx: 3, name: 'Contact'}
]

const App = () => {
	return (
		<>
			<div className={'container flex flex-col place-items-center justify-center w-1/3 mx-auto'}>
				<section className={'space-x-4 m-4'}>
					{ButtonList.map(btn => <Button key={btn.idx} name={btn.name}/>)}
				</section>
				<section className={'space-x-4 m-4'}>
					{ButtonList.map(btn => <Button2 key={btn.idx} name={btn.name}/>)}
				</section>
				<section className={'space-x-4 m-4'}>
					{ButtonList.map(btn => <EventButton key={btn.idx} name={btn.name}/>)}
				</section>
				<section className={'space-x-4 m-4'}>
					<InputTag/>
				</section>
				<section className={'space-x-4 m-4'}>
					<InputOnchange/>
				</section>
				<section className={'space-x-4 m-4'}>
					<InputOnKeyDownUp/>
				</section>
			</div>
		</>
	)
}

export default App
