import React, { Fragment } from 'react';
import { Avatar, Chip, Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faUsers } from '@fortawesome/free-solid-svg-icons';
import { translate } from '../../../../Locales';
import './style.css';

const CardevaluationEvaluation = ({ data }) => {
	return (
		<Card className='card'>
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
							<div className='evaluation-title'>{translate('type_capital')}</div>
							<div className='evaluation-text'>
								{translate('requestApproval')} - {data.author.name}
							</div>
						</div>
						<div className='evaluation-status'>
							<div className='evaluation-title'>{translate('status_capital')}</div>
							<div className='evaluation-text'>
								<Chip className='chip' variant='outlined' label={translate(data.status)} />
							</div>
						</div>
						<div className='evaluation-document'>
							<div className='evaluation-document-text'>
								<a className='evaluation-document-link' href={data.resourceUrl}>
									{translate('viewApprovals')}
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
