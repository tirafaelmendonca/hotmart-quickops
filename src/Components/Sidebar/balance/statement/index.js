import React from 'react';
import { translate } from '$/locales';
import formatCurrency from '$/utils/currency';
import StatementItem from './statementItem';
import './style.css';

const Statement = ({ data }) => {
	return (
		<div className='statement'>
			<div id='statement-title'>{translate('statement')}</div>
			<div className='statement-list-title'>
				<div id='description'>{translate('description')}</div>
				<div id='value'>{translate('value')}</div>
			</div>
			{data.declared > 0 && (
				<StatementItem
					description={translate('declaredExpenditure')}
					subDescription={translate('expenditureDeclaredByTheTrooper')}
					value={formatCurrency(data.declared, data.currency.code, data.currency.symbol)}
				/>
			)}
			{data.approved > 0 && (
				<StatementItem
					description={translate('approvedExpenses')}
					subDescription={translate('expensesApprovedByTheFinancier')}
					value={formatCurrency(data.approved, data.currency.code, data.currency.symbol)}
				/>
			)}
			{data.received > 0 && (
				<StatementItem
					description={translate('paymentMade')}
					subDescription={translate('paymentMadeByTheFinance')}
					value={formatCurrency(data.received, data.currency.code, data.currency.symbol)}
				/>
			)}
		</div>
	);
};

export default Statement;
