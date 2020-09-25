import React, { Fragment, useState } from 'react';
import { Avatar, Chip, Select } from '@material-ui/core';
import './style.css';
import Card from '../../Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faReceipt, faUsers } from '@fortawesome/free-solid-svg-icons';

const CardevaluationEvaluation = ({ data }) => {
	return (
		<Card>
			{data && (
				<Fragment>
					<div className='evaluation'>
						<div className='evaluation-card-type'>
							<div className='evaluation-icon'>
								<Avatar>
									<FontAwesomeIcon color='#5f6772' icon={faUsers} />
								</Avatar>
							</div>
							<div className='evaluation-date'>{new Date(data.cardDate).toLocaleDateString()}</div>
						</div>
						<div className='evaluation-type'>
							<div className='evaluation-title'>TIPO</div>
							<div className='evaluation-text'>Aprovação de Solicitação - {data.author.name}</div>
						</div>
						<div className='evaluation-status'>
							<div className='evaluation-title'>STATUS</div>
							<div className='evaluation-text'>
								<Chip
									className='chip'
									variant='outlined'
									label={data.status === 'PENDING' ? 'Pendente' : ''}
								/>
							</div>
						</div>
						<div className='evaluation-document'>
							<div className='evaluation-document-text'>
								<a className='evaluation-document-link' href={data.resourceUrl}>
									Ver aprovações
									<FontAwesomeIcon className='evaluation-document-icon' icon={faAngleDown} />
								</a>
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Card>
	);
};

export default CardevaluationEvaluation;
