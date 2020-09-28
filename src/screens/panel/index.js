import React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { translate } from '$/locales';
import './style.scss';

const Panel = () => {
	const history = useHistory();

	const goToSolicitation = () => {
		history.push('/panel/solicitation');
	};

	return (
		<div className='panel'>
			<Button variant='outlined' id='button' onClick={() => goToSolicitation()}>
				<FontAwesomeIcon id='icon' icon='file-alt' />
				{translate('solicitation')}
			</Button>
		</div>
	);
};

export default Panel;
