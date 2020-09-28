import React from 'react';
import { translate } from '$/locales';
import Balance from './balance';
import Status from './status';
import './style.scss';

const SideBar = ({ data }) => {
	return (
		<div className='sidebar'>
			<Status text={data && translate(data[0].accountabilityStatus)} />
			{data && data.map((item, key) => <Balance key={key} data={item} />)}
		</div>
	);
};

export default SideBar;
