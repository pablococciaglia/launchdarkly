import React, { useState, useEffect } from 'react';
import { ListProducts } from './ListProducts';

export const Products = ({ select }) => {
	const [products, setproducts] = useState([]);

	useEffect(() => {
		const customData = require('../../assets/Products.json');
		setproducts(customData);
	}, []);

	switch (select) {
		case 'min':
			products.sort((a, b) => {
				if (a.price < b.price) {
					return -1;
				}
				if (a.price > b.price) {
					return 1;
				}
				return 0;
			});

			return (
				<ul>
					<ListProducts products={products} />
				</ul>
			);

		case 'max':
			products.sort((a, b) => {
				if (a.price < b.price) {
					return 1;
				}
				if (a.price > b.price) {
					return -1;
				}
				return 0;
			});

			return (
				<ul>
					<ListProducts products={products} />
				</ul>
			);

		default:
			return (
				//the list will be display in the original order that is in the .json
				<ul>
					<ListProducts products={products} />
				</ul>
			);
	}
};
