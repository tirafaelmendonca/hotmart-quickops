import React, { Fragment } from 'react';
import { Button, Card } from '@material-ui/core';
import { Input, Select, Upload } from '$/components';
import { CURRENCY_CODE, EXPENSE_TYPE_CODE } from '$/utils/constants';
import { translate } from '$/locales';
import './style.css';

const AddExpense = ({ cancel, formik }) => {
	return (
		<Fragment>
			<Card className='add-expense-form'>
				<div id='title'>{translate('newExpense')}</div>
				<form onSubmit={formik.handleSubmit}>
					<div id='content'>
						<Upload name='resourceUrl' formik={formik} />
						<div id='form'>
							<div id='form-row'>
								<Select
									label={translate('type') + ' *'}
									data={EXPENSE_TYPE_CODE}
									name='expenseTypeCode'
									formik={formik}
								/>
								<Select
									label={translate('currency') + ' *'}
									name='currencyCode'
									data={CURRENCY_CODE}
									formik={formik}
								/>
							</div>
							<div id='form-row'>
								<Input
									label={translate('expenseDescription') + ' *'}
									name='notes'
									formik={formik}
								/>
								<Input
									label={translate('totalValueOfTheNoteCoupon') + ' *'}
									name='amountSpent'
									formik={formik}
									type='number'
								/>
							</div>
							<div id='form-row'>
								<Input
									label={translate('voucherDate') + ' *'}
									name='cardDate'
									formik={formik}
									type='date'
								/>
								<Input
									label={translate('valueToBeConsidered') + ' *'}
									name='amountTotal'
									formik={formik}
									type='number'
								/>
							</div>
						</div>
					</div>
					<div id='actions'>
						<Button id='cancel' variant='outlined' onClick={() => cancel()}>
							{translate('cancel')}
						</Button>
						<Button id='save' variant='contained' color='primary' type='submit'>
							{translate('save')}
						</Button>
					</div>
				</form>
			</Card>
		</Fragment>
	);
};

export default AddExpense;
