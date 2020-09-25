import React, { Fragment } from 'react';
import { Avatar, Card } from '@material-ui/core';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { translate } from '../../../../Locales';

const CardaccountabilityAccountability = ({ data }) => {
	return (
		<Card className='card'>
			{data && (
				<Fragment>
					<div className='accountability'>
						<div className='accountability-card-type'>
							<div className='accountability-icon'>
								<Avatar>
									<FontAwesomeIcon color='#5f6772' icon={faAsterisk} />
								</Avatar>
							</div>
							<div className='accountability-date'>
								{new Date(data.cardDate).toLocaleDateString()}
							</div>
						</div>
						<div className='accountability-type'>
							<div className='accountability-title'>{translate('type_capital')}</div>
							<div className='accountability-text'>
								{data.cardType === 'ACCOUNTABILITY_SUBMITTED' &&
									translate('expensesSentForApprovalBy') + ' ' + data.author.name}
								{data.cardType === 'ACCOUNTABILITY_CREATED' &&
									translate('requestCompletedBy') + ' ' + data.author.name}
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Card>
	);
};

export default CardaccountabilityAccountability;
