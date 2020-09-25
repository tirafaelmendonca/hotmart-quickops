import React from 'react';
import { translate } from '../../../Locales';
import './style.css';

const Status = ({ text }) => (
	<div className='status'>
		<div id='title'>{translate('status')}</div>
		<div id='text'>{text}</div>
	</div>
);

export default Status;
