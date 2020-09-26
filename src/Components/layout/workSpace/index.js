import React from 'react';
import Menu from '../menu';
import Breadcrumbs from '../breadcrumbs';
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
