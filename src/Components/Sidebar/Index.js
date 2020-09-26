import React from 'react';
import Balance from './balance';
import Status from './status';
import './style.css';

const SideBar = ({ data }) => {
	const getStatus = () => {
		if (data && data[0].accountabilityStatus === 'OPEN') {
			return 'Aguardando Financeiro';
		}
	};

	return (
		<div className='sidebar'>
			<Status text={data && getStatus()} />
			{data && data.map((item, key) => <Balance key={key} data={item} />)}
		</div>
	);
};

export default SideBar;
