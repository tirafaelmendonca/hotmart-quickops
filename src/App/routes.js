import Solicitation from './Solicitation';
import Panel from './Panel';

const Routes = [
	{
		simplePath: 'panel',
		name: 'Painel',
		path: '/panel',
		component: Panel
	},
	{
		simplePath: 'solicitation',
		name: 'Solicitação',
		path: '/panel/solicitation',
		component: Solicitation
	}
];

export default Routes;
