import React from 'react';

export const ListProducts = ({ products }) => {
	return (
		<>
			{products.map((item) => (
				<li key={Math.random()} className='listbox__list'>
					<div className='list__flexcontainer list__background mt7'>
						<h2 className='list__textinfo'>X</h2>
						<img
							className='list__img ml7'
							src={item.url}
							alt='A good product'
						></img>

						<div className='list__textsbox'>
							<h2 className='list__textcompany'>{item.company}</h2>
							<strong className='list__texttitle'>{item.title}</strong>
							<strong className='list__textstake'>Price: € {item.price}</strong>
						</div>

						<button className='list__button'>q</button>
					</div>

					<hr />
				</li>
			))}
		</>
	);
};
