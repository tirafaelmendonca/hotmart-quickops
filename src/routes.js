import { Solicitation, Panel } from './Screens';

const Routes = [
	{
		simplePath: 'panel',
		name: 'panel',
		path: '/panel',
		component: Panel
	},
	{
		simplePath: 'solicitation',
		name: 'solicitacao',
		path: '/panel/solicitation',
		component: Solicitation
	}
];

export default Routes;
