import React, { useEffect, useState } from 'react';
import { Header, Timeline, SideBar } from '../../components';
import './style.css';
import axios from 'axios';
import { Button, IconButton } from '@material-ui/core';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddExpense from './addExpense';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import { translate } from '../../locales';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Solicitation = () => {
	const [
		showAddExpense,
		setShowAddExpense
	] = useState(false);

	const [
		showSuccess,
		setShowSuccess
	] = useState(false);

	const [
		header,
		setHeader
	] = useState();

	const [
		timeline,
		setTimeline
	] = useState();

	const [
		sidebar,
		setSidebar
	] = useState();

	useEffect(async () => {
		let header = await axios.get('https://api-front-end-challenge.buildstaging.com/api/header');
		setHeader(header.data);

		let timeline = await axios.get('https://api-front-end-challenge.buildstaging.com/api/timeline');
		setTimeline(timeline.data.content);

		let sidebar = await axios.get('https://api-front-end-challenge.buildstaging.com/api/sidebar');
		setSidebar(sidebar.data.content);
	}, []);

	const save = async () => {
		let payload = { ...formik.values, cardDate: new Date(formik.values.cardDate).getTime() };

		try {
			let result = await axios.post(
				'https://api-front-end-challenge.buildstaging.com/api/expense/add',
				payload
			);

			setTimeline([
				...timeline,
				result.data
			]);
			setShowSuccess(true);
			setShowAddExpense(false);
			closeSuccess();
			formik.handleReset();
		} catch (e) {
			console.log(e);
		}
	};

	const closeSuccess = () => {
		setTimeout(() => setShowSuccess(false), 3000);
	};

	const cancel = () => {
		setShowAddExpense(false);
		formik.handleReset();
	};

	const initialValues = {
		expenseTypeCode: '',
		currencyCode: '',
		amountSpent: '',
		amountTotal: '',
		notes: '',
		cardDate: '',
		resourceUrl: ''
	};

	const validationSchema = Yup.object().shape({
		expenseTypeCode: Yup.string().required(translate('requiredField')),
		currencyCode: Yup.string().required(translate('requiredField')),
		amountSpent: Yup.string().required(translate('requiredField')),
		amountTotal: Yup.string().required(translate('requiredField')),
		notes: Yup.string().required(translate('requiredField')),
		cardDate: Yup.string().required(translate('requiredField'))
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: () => save()
	});

	return (
		<div className='solicitation'>
			<div className='core'>
				<Header data={header} />
				<div className='add-expense'>
					<Button
						variant='outlined'
						className='add-expense-button'
						onClick={() => setShowAddExpense(true)}
					>
						<FontAwesomeIcon className='add-expense-icon' icon={faReceipt} />
						{translate('add_expense')}
					</Button>
				</div>
				{showSuccess && (
					<Alert
						className='alert'
						action={
							<IconButton
								aria-label='close'
								color='inherit'
								size='small'
								onClick={() => setShowSuccess(false)}
							>
								<CloseIcon fontSize='inherit' />
							</IconButton>
						}
					>
						{translate('expenseSuccessfullySaved')}
					</Alert>
				)}
				{showAddExpense && <AddExpense formik={formik} save={save} cancel={cancel} />}
				<Timeline data={timeline} />
			</div>
			<div className='side'>
				<SideBar data={sidebar} />
			</div>
		</div>
	);
};

export default Solicitation;
