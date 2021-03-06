import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import { translate } from '$/locales';
import './style.scss';

const Upload = ({ name, formik }) => {
	return (
		<div className={formik.values[name] !== '' ? 'file-success' : 'file'}>
			<div className='title-file'>{translate('sendTheReceipt')}</div>
			<p className='description'>{translate('youCanInsertFiles')}</p>
			<label htmlFor={name}>
				<input
					style={{ display: 'none' }}
					id={name}
					name={name}
					onChange={formik.handleChange}
					value={formik.values[name]}
					type='file'
				/>
				<Button className='file-button' variant='outlined' component='span'>
					<FontAwesomeIcon className='add-expense-icon' icon='filter' />
					{translate('chooseFile')}
				</Button>
			</label>
		</div>
	);
};

const propsAreEqual = (prev, next) => {
	return (
		prev.formik.values[prev.name] === next.formik.values[prev.name] &&
		prev.formik.errors[prev.name] === next.formik.errors[prev.name]
	);
};

export default memo(Upload, propsAreEqual);
