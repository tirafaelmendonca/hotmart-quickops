import React, { Fragment, useState } from 'react';
import { Card as CardMUI, Select } from '@material-ui/core';
import Text from './text';
import { translate } from '../../locales';
import './style.css';

const Header = ({ data }) => {
	const [
		analist,
		setAnalist
	] = useState(0);

	const getPeople = people => {
		return people === 1 ? translate('people') : translate('peoples');
	};

	return (
		<CardMUI className='header'>
			{data && (
				<Fragment>
					<div className='title'>
						{translate('reimbursement')} #{data.id} - {data.justification}
					</div>
					<div className='items'>
						<div className='data'>
							<Text leftText={translate('name')} rigthText={data.collaborator.name} />
							<Text leftText={translate('email')} rigthText={data.collaborator.email} />
							<Text leftText={translate('justification')} rigthText={data.justification} />
							<Text leftText={translate('finality')} rigthText={data.purpose} />
							<Text leftText={translate('project')} rigthText={data.project.title} />
							<Text
								leftText={translate('date')}
								rigthText={new Date(data.createdOn).toLocaleDateString()}
							/>
							<Text
								leftText={translate('amount')}
								rigthText={
									data.accountabilityExtraInfo.amountOfPeople +
									' ' +
									getPeople(data.accountabilityExtraInfo.amountOfPeople)
								}
							/>
							<Text
								leftText={translate('includesBreakfast')}
								rigthText={
									data.accountabilityExtraInfo.budgetForBreakfast ? (
										translate('yes')
									) : (
										translate('no')
									)
								}
							/>
						</div>
						<div className='others'>
							<div className='assign-analyst-title'>{translate('assignAnalyst')}</div>
							<Select
								native
								value={analist}
								onChange={e => setAnalist(e.target.value)}
								variant='outlined'
								className='assign-analyst'
							>
								<option value={0}>{translate('assignAnalyst')}</option>
								<option value={10}>Henrique</option>
								<option value={20}>Cristiano</option>
								<option value={30}>Gilberto</option>
							</Select>
							<div className='cost-center-title'>{translate('costCenter')}</div>
							{data.costCenters.map((costCenter, key) => (
								<div className='cost-center' key={key}>
									{costCenter.percentage}% - {costCenter.name}
								</div>
							))}
						</div>
					</div>
				</Fragment>
			)}
		</CardMUI>
	);
};

export default Header;
