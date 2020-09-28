import React from 'react';
import { translate } from '$/locales';
import './style.scss';

const Status = ({ text }) => (
	<div className='status'>
		<div id='title'>{translate('status')}</div>
		<div id='text'>{text}</div>
	</div>
);

export default Status;
