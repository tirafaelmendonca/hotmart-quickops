import React, { Fragment, useState } from 'react';
import { Avatar, Chip, Card, Select } from '@material-ui/core';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell, faReceipt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import formatCurrency from '../../../sideBar/balance/statement/currency';
import { translate } from '../../../../locales';

const CardexpenseExpense = ({ data }) => {
	return (
		<Card className='card'>
			{data && (
				<Fragment>
					<div className='expense'>
						<div className='expense-card-type'>
							<div className='expense-icon'>
								<Avatar>
									<FontAwesomeIcon
										color='#0f68bd'
										icon={data.expenseTypeCode === 'hotel-fee' ? faConciergeBell : faUtensils}
									/>
								</Avatar>
							</div>
							<div className='expense-date'>{new Date(data.cardDate).toLocaleDateString()}</div>
						</div>
						<div className='expense-type'>
							<div className='expense-title'>{translate('type_capital')}</div>
							<div className='expense-text'>{translate(data.expenseTypeCode)}</div>
						</div>
						<div className='expense-value'>
							<div className='expense-title'>{translate('value_capital')}</div>
							<div className='expense-text'>
								{formatCurrency(
									data.amountSpent,
									data.currencyCode,
									data.currencySymbol ? data.currencySymbol : ''
								)}
							</div>
							<div className='expense-sub-text'>
								{translate('invoiceAmount')}
								{formatCurrency(
									data.amountSpent,
									data.currencyCode,
									data.currencySymbol ? data.currencySymbol : ''
								)}
							</div>
						</div>
						<div className='expense-status'>
							<div className='expense-title'>{translate('status_capital')}</div>
							<div className='expense-text'>
								<Chip className='chip' variant='outlined' label={translate(data.status)} />
							</div>
						</div>
						<div className='expense-document'>
							<div className='expense-document-text'>
								<a className='expense-document-link' href={data.resourceUrl}>
									<FontAwesomeIcon className='expense-document-icon' icon={faReceipt} />
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
