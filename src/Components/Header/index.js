import React, { Fragment } from 'react';
import { Card as CardMUI, Select } from '@material-ui/core';
import { translate } from '$/locales';
import { ANALIST } from '$/utils/constants';
import Text from './text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Header = ({ data, analist, setAnalist }) => {
	const getPeople = people => {
		return people === 1 ? translate('people') : translate('peoples');
	};

	return (
		<CardMUI className='header'>
			{data && (
				<Fragment>
					<div id='title'>
						<div id='text'>
							{translate('reimbursement')} #{data.id} - {data.justification}
						</div>
						<div id='edit'>
							<FontAwesomeIcon id='icon' icon='edit' />
						</div>
					</div>
					<div id='items'>
						<div id='data'>
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
						<div id='others'>
							<div id='assign-analyst-title'>{translate('assignAnalyst')}</div>
							<Select
								native
								value={analist}
								onChange={e => setAnalist(e.target.value)}
								variant='outlined'
								className='assign-analyst'
							>
								<option value={'empty'}>{translate('chooseAnOption')}</option>
								{ANALIST.map((item, key) => (
									<option key={key} value={item}>
										{item}
									</option>
								))}
							</Select>
							<div id='cost-center-title'>{translate('costCenter')}</div>
							{data.costCenters.map((costCenter, key) => (
								<div id='cost-center' key={key}>
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
