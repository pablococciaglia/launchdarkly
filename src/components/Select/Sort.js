import React from 'react';

export const Sort = ({ setSelect, select, handleOptionlist }) => {
	const handleOptionChange = (e) => {
		setSelect(e.target.value);
	};

	return (
		<form
			className='selector__option'
			onBlur={handleOptionlist}
			onClick={handleOptionlist}
			onChange={handleOptionChange}
		>
			<p>
				<span>2</span>SORT ITEMS
			</p>

			<div className='selector__optionbox'>
				<br />
				<label>
					<input
						defaultChecked={select === 'min' ? true : false}
						type='radio'
						id='test2'
						name='inputradio'
						value='min'
					/>
					Price min to max
					<i></i>
				</label>
				<br />
				<label>
					<input
						defaultChecked={select === 'max' ? true : false}
						type='radio'
						id='test3'
						name='inputradio'
						value='max'
					/>
					Price max to min
					<i></i>
				</label>
			</div>
		</form>
	);
};
