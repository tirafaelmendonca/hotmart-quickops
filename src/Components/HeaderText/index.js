import React from 'react';
import './style.css';

const HeaderText = ({ leftText, rigthText }) => {
	return (
		<div className='text'>
			<div className='left-text'>{leftText}</div>
			<div className='rigth-text'>{rigthText}</div>
		</div>
	);
};
export default HeaderText;
