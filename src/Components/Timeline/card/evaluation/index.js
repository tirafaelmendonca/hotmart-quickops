import React, { Fragment } from 'react';
import { Avatar, Chip, Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { translate } from '$/locales';
import './style.css';

const CardevaluationEvaluation = ({ data }) => {
	return (
		<Card id='card'>
			{data && (
				<Fragment>
					<div className='evaluation'>
						<div id='icon-area'>
							<div id='icon'>
								<Avatar>
									<FontAwesomeIcon color='#5f6772' icon='users' />
								</Avatar>
							</div>
							<div id='date'>{new Date(data.cardDate).toLocaleDateString()}</div>
						</div>
						<div id='type'>
							<div id='title'>{translate('type_capital')}</div>
							<div id='text'>
								{translate('requestApproval')} - {data.author.name}
							</div>
						</div>
						<div id='status'>
							<div id='title'>{translate('status_capital')}</div>
							<div id='text'>
								<Chip id='chip' variant='outlined' label={translate(data.status)} />
							</div>
						</div>
						<div id='document'>
							<div id='document-text'>
								<a id='document-link' href={data.resourceUrl}>
									{translate('viewApprovals')}
									<FontAwesomeIcon id='document-icon' icon='angle-down' />
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
