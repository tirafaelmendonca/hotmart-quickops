import React, { Fragment, useState } from 'react';
import { Avatar, Chip, Select } from '@material-ui/core';
import './style.css';
import Card from '../../Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell, faReceipt, faUtensils } from '@fortawesome/free-solid-svg-icons';

const CardexpenseExpense = ({ data }) => {
	return (
		<Card>
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
							<div className='expense-title'>TIPO</div>
							<div className='expense-text'>
								{data.expenseTypeCode === 'hotel-fee' ? 'Hotel' : 'Alimentação'}
							</div>
						</div>
						<div className='expense-value'>
							<div className='expense-title'>VALOR</div>
							<div className='expense-text'>R$ {data.amountSpent}</div>
							<div className='expense-sub-text'>Valor da nota: R$ {data.amountTotal}</div>
						</div>
						<div className='expense-status'>
							<div className='expense-title'>STATUS</div>
							<div className='expense-text'>
								<Chip
									className='chip'
									variant='outlined'
									label={data.status === 'PENDING' ? 'Pendente' : ''}
								/>
							</div>
						</div>
						<div className='expense-document'>
							<div className='expense-document-text'>
								<a className='expense-document-link' href={data.resourceUrl}>
									<FontAwesomeIcon className='expense-document-icon' icon={faReceipt} />
									Ver nota fiscal
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
