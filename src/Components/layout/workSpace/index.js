import React from 'react';
import { Menu, Breadcrumbs } from '$/components';
import './style.css';

const WorkSpace = ({ children }) => {
	return (
		<div className='space'>
			<Menu />
			<div className='work'>
				<Breadcrumbs />
				{children}
			</div>
		</div>
	);
};
export default WorkSpace;
