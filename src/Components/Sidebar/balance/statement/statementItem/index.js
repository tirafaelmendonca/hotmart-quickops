import React from 'react';
import './style.scss';

const StatementItem = ({ description, subDescription, value }) => (
	<div className='statement-list-item'>
		<div id='description-group'>
			<div id='description'>{description}</div>
			<div id='value'>{value}</div>
		</div>
		<div id='sub-description'>{subDescription}</div>
	</div>
);

export default StatementItem;
