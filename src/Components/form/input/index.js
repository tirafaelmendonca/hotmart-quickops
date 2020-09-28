import React, { memo } from 'react';
import { InputLabel, TextField } from '@material-ui/core';
import './style.scss';

const Input = ({ label, name, formik, type = 'text' }) => {
	return (
		<div className='input'>
			<InputLabel id='label'>{label}</InputLabel>
			<TextField
				fullWidth
				name={name}
				value={formik.values[name]}
				onChange={formik.handleChange}
				variant='outlined'
				type={type}
				error={formik.submitCount > 0 && formik.errors[name]}
			/>
			<p id='error'>{formik.submitCount > 0 ? formik.errors[name] : ''}</p>
		</div>
	);
};

const propsAreEqual = (prev, next) => {
	return (
		prev.formik.values[prev.name] === next.formik.values[prev.name] &&
		prev.formik.errors[prev.name] === next.formik.errors[prev.name] &&
		prev.formik.submitCount === next.formik.submitCount
	);
};

export default memo(Input, propsAreEqual);
