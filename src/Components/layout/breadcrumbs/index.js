import React from 'react';
import { Breadcrumbs as BreadcrumbsMUI, Link } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import Routes from '$/routes';
import { translate } from '$/locales';
import './style.css';

const Breadcrumbs = () => {
	const location = useLocation();
	const paths = location.pathname.split('/').filter(path => path !== '');

	const generateLink = (path, index) => {
		const route = Routes.find(x => x.simplePath === path);
		const color = index !== paths.length - 1 ? 'textSecondary' : 'textPrimary';

		return (
			<Link color={color} href={route.path}>
				{translate(route.name)}
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
