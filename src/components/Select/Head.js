import React, { useState } from 'react';
import { Sort } from './Sort';

export const Head = ({ setSelect, select }) => {
	const [optionlist, setoptionlist] = useState(false);

	const handleOptionlist = () => {
		if (optionlist === false) {
			setoptionlist(!optionlist);
		} else {
			setTimeout(() => {
				setoptionlist(!optionlist);
			}, 250);
		}
	};

	return (
		<>
			<div className='header__margin'>
				<div>
					<h1 className='header__title'>STORE</h1>
				</div>
				{optionlist && (
					<Sort
						setSelect={setSelect}
						select={select}
						handleOptionlist={handleOptionlist}
					/>
				)}
				<div onClick={handleOptionlist} className='selector__frame'>
					<p>
						<span>1</span>SORT ITEMS
					</p>
				</div>
			</div>
			<hr />
		</>
	);
};
