import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, IconButton } from '@material-ui/core';
import { Header, Input, Select, Upload } from '../../../components';
import './style.css';

const expenseTypeCodeArray = [
	'hotel-fee',
	'food',
	'transport'
];
const currencyCodeArray = [
	'BRL',
	'USD',
	'MXN'
];

const AddExpense = ({ cancel, formik }) => {
	return (
		<Fragment>
			<Card className='add-expense-form'>
				<div id='title'>Nova despesa</div>
				<form onSubmit={formik.handleSubmit}>
					<div id='content'>
						<Upload name='resourceUrl' formik={formik} />
						<div id='form'>
							<div id='form-row'>
								<Select
									label='Tipo *'
									data={expenseTypeCodeArray}
									name='expenseTypeCode'
									formik={formik}
								/>
								<Select
									label='Moeda *'
									name='currencyCode'
									data={currencyCodeArray}
									formik={formik}
								/>
							</div>
							<div id='form-row'>
								<Input label='Descrição da despesa *' name='notes' formik={formik} />
								<Input
									label='Valor total da nota/cupom *'
									name='amountSpent'
									formik={formik}
									type='number'
								/>
							</div>
							<div id='form-row'>
								<Input label='Data do comprovante *' name='cardDate' formik={formik} type='date' />
								<Input
									label='Valor a ser considerado *'
									name='amountTotal'
									formik={formik}
									type='number'
								/>
							</div>
						</div>
					</div>
					<div id='actions'>
						<Button id='cancel' variant='outlined' onClick={() => cancel()}>
							Cancelar
						</Button>
						<Button id='save' variant='contained' color='primary' type='submit'>
							Salvar
						</Button>
					</div>
				</form>
			</Card>
		</Fragment>
	);
};

export default AddExpense;
