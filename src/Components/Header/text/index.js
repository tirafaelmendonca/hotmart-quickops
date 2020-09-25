import React from 'react';
import './style.css';

const Text = ({ leftText, rigthText }) => {
	return (
		<div className='text'>
			<div className='left-text'>{leftText}</div>
			<div className='rigth-text'>{rigthText}</div>
		</div>
	);
};
export default Text;
