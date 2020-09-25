import React from 'react';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Values from './Values';
import Statement from './Statement';
import './style.css';
import formatCurrency from './Statement/currency';
import { translate } from '../../../Locales';

const Balance = ({ data }) => (
	<div className='balance'>
		<div id='title-box'>
			<div id='title'>{translate('balance')}</div>
			<div id='total-balance'>
				{formatCurrency(data.balance, data.currency.code, data.currency.symbol)}
			</div>
			<div id='group-values'>
				<Values
					icon={faArrowUp}
					title={translate('returned')}
					value={formatCurrency(data.returned, data.currency.code, data.currency.symbol)}
				/>
				<div id='separation' />
				<Values
					icon={faArrowDown}
					title={translate('received')}
					value={formatCurrency(data.received, data.currency.code, data.currency.symbol)}
				/>
			</div>
			<Statement data={data} />
		</div>
	</div>
);

export default Balance;