import React, { Fragment } from 'react';
import { Avatar, Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { translate } from '$/locales';
import './style.css';

const CardaccountabilityAccountability = ({ data }) => {
	return (
		<Card id='card'>
			{data && (
				<Fragment>
					<div className='accountability'>
						<div id='icon-area'>
							<div id='icon'>
								<Avatar>
									<FontAwesomeIcon color='#5f6772' icon='asterisk' />
								</Avatar>
							</div>
							<div id='date'>{new Date(data.cardDate).toLocaleDateString()}</div>
						</div>
						<div id='type'>
							<div id='title'>{translate('type_capital')}</div>
							<div id='text'>
								{data.cardType === 'ACCOUNTABILITY_SUBMITTED' &&
									`${translate('expensesSentForApprovalBy')} ${data.author.name}`}
								{data.cardType === 'ACCOUNTABILITY_CREATED' &&
									`${translate('requestCompletedBy')} ${data.author.name}`}
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Card>
	);
};

export default CardaccountabilityAccountability;
