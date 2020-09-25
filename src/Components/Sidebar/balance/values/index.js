import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '@material-ui/core';
import React from 'react';
import './style.css';

const Values = ({ icon, title, value }) => (
	<div className='values'>
		<Avatar id='avatar'>
			<FontAwesomeIcon id='icon' color='#545b64' icon={icon} />
		</Avatar>
		<div id='group'>
			<div>{title}</div>
			<div id='value'>{value}</div>
		</div>
	</div>
);

export default Values;
