import React, { Fragment } from 'react';
import { Avatar, Chip, Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import formatCurrency from '$/utils/currency';
import { translate } from '$/locales';
import './style.scss';

const CardexpenseExpense = ({ data }) => {
	return (
		<Card id='card'>
			{data && (
				<Fragment>
					<div className='expense'>
						<div id='icon-area'>
							<div id='icon'>
								<Avatar>
									<FontAwesomeIcon color='#0f68bd' icon={data.expenseTypeIcon} />
								</Avatar>
							</div>
							<div id='date'>{new Date(data.cardDate).toLocaleDateString()}</div>
						</div>
						<div id='type'>
							<div id='title'>{translate('type_capital')}</div>
							<div id='text'>{translate(data.expenseTypeCode)}</div>
						</div>
						<div id='value'>
							<div id='title'>{translate('value_capital')}</div>
							<div id='text'>
								{formatCurrency(
									data.amountSpent,
									data.currencyCode,
									data.currencySymbol ? data.currencySymbol : ''
								)}
							</div>
							<div id='sub-text'>
								{translate('invoiceAmount')}
								{formatCurrency(
									data.amountTotal,
									data.currencyCode,
									data.currencySymbol ? data.currencySymbol : ''
								)}
							</div>
						</div>
						<div id='status'>
							<div id='title'>{translate('status_capital')}</div>
							<div id='expense-text'>
								<Chip id='chip' variant='outlined' label={translate(data.status)} />
							</div>
						</div>
						<div id='document'>
							<div id='document-text'>
								<a id='document-link' href={data.resourceUrl}>
									<FontAwesomeIcon id='document-icon' icon='receipt' />
									{translate('seeInvoice')}
								</a>
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Card>
	);
};

export default CardexpenseExpense;
