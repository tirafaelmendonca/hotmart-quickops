import React from 'react';
import './style.scss';

const Text = ({ leftText, rigthText }) => {
	return (
		<div className='text'>
			<div id='left'>{leftText}</div>
			<div id='rigth'>{rigthText}</div>
		</div>
	);
};
export default Text;
