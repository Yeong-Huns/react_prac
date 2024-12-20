import './App.css'

const element1 = <h2>Hello, World!</h2>
const element2 = (
	<ul>
		<li>A</li>
		<li>B</li>
		<li>C</li>
	</ul>
)

const BasicExpression = () => {
	const name = 'Yeong-Hun';
	const age = 31;
	const isAdmin = true;

	return (
		<div>
			<p>Name: {name}</p>
			<p>Age next year: {age + 1}</p>
			<p>{name + "의 프로필입니다."}</p>
			<p>{`${name} 은 현재 ${age} 살입니다.`}</p>
			<p>Admin Status: {String(isAdmin)}</p>
		</div>
	)
}

const ObjectExpression = () => {
	const user = {
		name: 'Yeong-Hun',
		email: 'vosxja1@gmail.com'
	};
	const colors = ['red', 'blue', 'green'];
	const numbers = [1, 2, 3, 4, 5];

	return (
		<div>
			<p>Name: {user.name} ({user.email})</p>
			<p>First Colors: {colors[0]}</p>
			<p>Colors count: {colors.length}</p>
			<p>2배수 출력: {numbers.map(n => n * 2).join(', ')}</p>
			<p>짝수만 출력: {numbers.filter(n => n % 2 === 0).join(', ')}</p>
		</div>
	)
};

function FunctionExpression() {
	const getGreeting = (name) => `Hello, ${name}!`
	//const formatDate = (date) => date.toLocaleDateString();
	const formatDate = (date) => new Date(date).toLocaleDateString();
	const calculateTotal = (items) => items.reduce((sum, item) => sum + item.price, 0);
	const items = [{id: 1, price: 1000}, {id: 2, price: 2000}];

	return (
		<div>
			<p>Hello, World!</p>
			<p>{getGreeting('Yeong-Hun')}!</p>
			<p>Today is {formatDate(new Date())}</p>
			<p>Total: ${calculateTotal(items)}</p>
			<p>Good {
				(()=>{
					const hours = new Date().getHours();
					return hours < 12 ? 'morning' : hours < 18 ? 'afternoon' : 'evening';
				})()
			}</p>
		</div>
	)
}

console.log(element1, element2)

const language = 'JavaScript'


const App = () => {

	return (
		<>
			{/*이것은 주석입니다.*/}
			<h1>JSX</h1>
			<BasicExpression/>
			{element2}
			<ObjectExpression/>
			<FunctionExpression/>
		</>
	)
}

export default App
