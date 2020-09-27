import { Solicitation, Panel } from '$/screens';

const Routes = [
	{
		simplePath: 'panel',
		name: 'panel',
		path: '/panel',
		component: Panel
	},
	{
		simplePath: 'solicitation',
		name: 'solicitation',
		path: '/panel/solicitation',
		component: Solicitation
	}
];

export default Routes;
