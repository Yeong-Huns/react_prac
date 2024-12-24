import './App.css'
import InfoCard from "./InfoCard.jsx";
import ProductCard from "./ProductCard.jsx";
import CardLayout from "./CardLayout.jsx";

/*const cardData1 = {
	title: 'Props in React',
	content: 'Props pass data from one component to another.',
	author: '김영훈'
}

const cardData2 = {
	title: 'State in React',
	content: 'State is a JavaScript object that can be changed by the user interaction.',
	author: '김영훈'
}*/

const cards = [
	{
		idx: 1,
		title: 'Props in React',
		content: 'Props pass data from one component to another.',
		author: '김영훈'
	},
	{
		idx: 2,
		title: 'State in React',
		content: 'State is a JavaScript object that can be changed by the user interaction.',
		author: '김영훈'
	}
];

const Product = {
	name: '노트북',
	price: 123.4567
}

const App = () => {
	return (
		<>
			{/*<InfoCard {...cardData1}/>
			<InfoCard {...cardData2}/>*/}
			{cards.map(card => <InfoCard key={card.idx} {...card} />)}

			{/*<ProductCard
				name={'노트북'}
				price={123.4567}
				formatPrice={(price) => `$${price.toFixed(2)}`}
			/>*/}
			<ProductCard
				{...Product}
				formatPrice={(price) => `$${price.toFixed(2)}`}
			/>
			<div>
				<CardLayout title={'About'}>
					<p>Props of Components</p>
				</CardLayout>
				<CardLayout title={'Details'}>
					<ul>
						<li>Feature A</li>
						<li>Feature B</li>
						<li>Feature C</li>
					</ul>
				</CardLayout>
				<CardLayout title={'Contact'}>
					<p>Email: example@example.com</p>
					<p>Phone: 123-456-7890</p>
				</CardLayout>
			</div>
		</>
	)
}

export default App
