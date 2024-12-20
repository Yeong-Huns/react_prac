import './App.css'

const isLoggedIn = !true

function getUserContent(userState){
	return (
		userState === 'admin' ? (
			<>
				{/*사용자가 admin 이라면*/}
				<h2>관리자 페이지</h2>
				<button>관리</button>
			</>
		) : userState === 'user' ? (
			<>
				{/*사용자가 user 라면*/}
				<p>방문을 환영합니다!</p>
			</>
		) : (
			<>
				{/*사용자가 guest 라면*/}
				<a href='/signup'>회원가입</a>
			</>
		)
	)
}

const hasMessages = true;
const message = '하이하이'

const fruit = ['Apple', 'Banana', 'Orange', 'Mango'];
const books = [
	{id: 1, title: 'React', published: 2022, author: 'Jbee', existence: false},
	{id: 2, title: 'Redux', published: 2021, author: 'park', existence: false},
	{id: 3, title: 'GraphQL', published: 2020, author: 'kim', existence: false},
	{id: 4, title: 'TypeScript', published: 2019, author: 'doe', existence: false},
	{id: 5, title: 'JavaScript', published: 2018, author: 'sin', existence: false},
]

const isExist = books.filter(book => book.existence);

const App = () => {
	return (
		<>
			{/*{getUserContent('admin')}*/}
			{/*{getUserContent('user')}*/}
			{getUserContent('guest')}
			{/*{hasMessages && <p>메세지 도착!</p>}
			{message && <p>{message}</p>}*/}
			<p>
				Message: {message ?? <em>도착한 메세지가 없습니다.</em>}
				{/*null 병합 연산자는 앞에 null 또는 undefined 가 들어올때만 뒤를 반환한다.*/}
			</p>
			<p>
				Message: {message || <em>메세지가 비어있습니다.</em>}
				{/*or 연산자는 falsy 값이 들어오면 뒤를 반환한다.*/}
			</p>
			{[0, 123, 'A', 'Hello', true, false]}
			<br/>
			{/*배열 요소중 렌더링 가능한 숫자와 문자만 렌더링됨. 0123AHello*/}
			{
				[
					<button>A</button>,
					<button>B</button>,
					<button>C</button>
				]
			}
			{/*JSX 요소 또한 화면에 렌더링 가능한 요소기 때문에, 배열을 이용해서 표시할 수 있다.*/}
			{
				<ul>
					{fruit.map((fruit,index) => <li key={index}>{fruit}</li>)}
				</ul>
			}
			{/*이걸 리스트 렌더링이라 함 + index 를 통해 변경 요소를 리액트가 빠르게 찾을 수 있음*/}
			{/*그러나, 배열 자체의 Index 를 사용하는것은 값이 삭제되고 추가될 때, 성능상의 이슈나 오동작 할 수 있음*/}
			{
				isExist.length > 0 && <h2>현재 남아있는 책</h2>
			}
			{
				isExist.length > 0 ? isExist.map(book => <article key={book.id}><strong>{book.title}</strong><em> - {book.author}</em></article>)
					: <p>존재하는 책이 없습니다.</p>
			}
			{/*길이를 기준으로 평가, id를 object 의 고유 id 를 사용함으로써, 삭제나 내용의 추가에 유연한 대처, 오동작 방지가능 */}
			{isLoggedIn ? <h1>반갑습니다.</h1> : <h1>로그인이 필요합니다.</h1>}
			{isLoggedIn ? (
				<>
					<h2>재방문을 환영합니다.</h2>
					<p>로그인이 확인되었습니다. </p>
				</>
			) : (
				<>
					<h2>로그인을 해주세요</h2>
					<p>추가 서비스를 이용하려면 로그인이 필요합니다.</p>
				</>
			)}
		</>
	)
}

export default App
