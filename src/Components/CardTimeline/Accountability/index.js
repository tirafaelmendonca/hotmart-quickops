import React, { Fragment, useState } from 'react';
import { Avatar, Chip, Select } from '@material-ui/core';
import './style.css';
import Card from '../../Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAsterisk,
	faConciergeBell,
	faMoneyCheckAlt,
	faReceipt,
	faUtensils
} from '@fortawesome/free-solid-svg-icons';

const CardaccountabilityAccountability = ({ data }) => {
	return (
		<Card>
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
							<div className='accountability-title'>TIPO</div>
							<div className='accountability-text'>
								{data.cardType === 'ACCOUNTABILITY_SUBMITTED' ? (
									'Despesas enviadas para aprovação por' + data.author.name
								) : (
									'Solicitação concluída por ' + data.author.name
								)}
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Card>
	);
};

export default CardaccountabilityAccountability;
