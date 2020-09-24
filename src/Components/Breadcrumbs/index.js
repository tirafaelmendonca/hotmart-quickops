import React from 'react';
import { Breadcrumbs as BreadcrumbsMUI, Link } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import Routes from '../../App/routes';
import './style.css';

const Breadcrumbs = () => {
	let location = useLocation();
	let paths = location.pathname.split('/').filter(path => path !== '');

	const generateLink = (path, index) => {
		let route = Routes.find(route => route.simplePath === path);
		let color = index !== paths.length - 1 ? 'textSecondary' : 'textPrimary';

		return (
			<Link color={color} href={route.path}>
				{route.name}
			</Link>
		);
	};

	return (
		<BreadcrumbsMUI className='breadcrumbs'>
			{paths.map((path, index) => {
				return <div key={index}>{generateLink(path, index)}</div>;
			})}
		</BreadcrumbsMUI>
	);
};
export default Breadcrumbs;
