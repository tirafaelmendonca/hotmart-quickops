import React, { useEffect, useState } from 'react';
import { Button, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header, Timeline, SideBar } from '$/components';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { translate } from '$/locales';
import { getHeader, getTimeline, getSidebar, addExpense } from '$/services/solicitation';
import AddExpense from './addExpense';
import './style.css';
import { sort } from '$/utils/array';

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
		analist,
		setAnalist
	] = useState(0);

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

	useEffect(() => {
		const fetchData = async () => {
			let header = await getHeader();
			setHeader(header);

			let timeline = await getTimeline();
			setTimeline(sort(timeline.content, 'cardDate'));

			let sidebar = await getSidebar();
			setSidebar(sidebar.content);
		};
		fetchData();
	}, []);

	const save = async () => {
		let payload = { ...formik.values, cardDate: new Date(formik.values.cardDate).getTime() };

		let result = await addExpense(payload);
		console.log(result);
		timeline.push(result);
		sort(timeline, 'cardDate');
		setTimeline(timeline);
		setShowSuccess(true);
		setShowAddExpense(false);
		closeSuccess();
		formik.handleReset();
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
			<div id='core'>
				<Header data={header} analist={analist} setAnalist={setAnalist} />
				<div className='add-expense'>
					<Button variant='outlined' id='button' onClick={() => setShowAddExpense(true)}>
						<FontAwesomeIcon id='icon' icon='receipt' />
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
			<div id='side'>
				<SideBar data={sidebar} />
			</div>
		</div>
	);
};

export default Solicitation;
