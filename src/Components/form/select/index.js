import React, { memo } from 'react';
import { InputLabel, Select as SelectMUI } from '@material-ui/core';
import { translate } from '$/locales';
import './style.css';

const Select = ({ label, name, data, formik }) => {
	return (
		<div className='select'>
			<InputLabel id='label'>{label}</InputLabel>
			<SelectMUI
				className='select-box'
				fullWidth
				name={name}
				native
				onChange={formik.handleChange}
				value={formik.values[name]}
				variant='outlined'
				error={formik.submitCount > 0 && formik.errors[name]}
			>
				<option value='empty'>{translate('chooseAnOption')}</option>
				{data.map((item, key) => (
					<option key={key} value={item}>
						{translate(item)}
					</option>
				))}
			</SelectMUI>
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

export default memo(Select, propsAreEqual);
