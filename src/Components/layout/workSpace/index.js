import React from 'react';
import Menu from '../Menu';
import Breadcrumbs from '../Breadcrumbs';
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
