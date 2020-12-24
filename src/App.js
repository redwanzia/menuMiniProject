import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	const allCategories = [ 'all', ...new Set(items.map((item) => item.category)) ];

	const [ menuItems, setMenuItems ] = useState(items);
	const [ categories, setCategory ] = useState(allCategories);

	const filterItem = (category) => {
		if (category === 'all') {
			setMenuItems(items);
			return;
		}
		const newItem = items.filter((item) => item.category === category);
		setMenuItems(newItem);
	};

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>Menu</h2>
				</div>
				<Categories categories={categories} filterItem={filterItem} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
