import React, { Fragment, useState } from 'react';
import { Card as CardMUI, Select } from '@material-ui/core';
import HeaderText from '../HeaderText';
import './style.css';

const Header = ({ data }) => {
	const [
		analist,
		setAnalist
	] = useState(0);

	return (
		<CardMUI className='header'>
			{data && (
				<Fragment>
					<div className='title'>
						Reembolso #{data.id} - {data.justification}
					</div>
					<div className='items'>
						<div className='data'>
							<HeaderText leftText='Nome' rigthText={data.collaborator.name} />
							<HeaderText leftText='E-mail' rigthText={data.collaborator.email} />
							<HeaderText leftText='Justificativa' rigthText={data.justification} />
							<HeaderText leftText='Finalidade' rigthText={data.purpose} />
							<HeaderText leftText='Projeto' rigthText={data.project.title} />
							<HeaderText
								leftText='Data'
								rigthText={new Date(data.createdOn).toLocaleDateString()}
							/>
							<HeaderText
								leftText='Quantidade'
								rigthText={data.accountabilityExtraInfo.amountOfPeople + ' pessoas'}
							/>
							<HeaderText
								leftText='Inclui café da manhã'
								rigthText={data.accountabilityExtraInfo.budgetForBreakfast ? 'Sim' : 'Não'}
							/>
						</div>
						<div className='others'>
							<div className='assign-analyst-title'>Atribuir Analista</div>
							<Select
								native
								value={analist}
								onChange={e => setAnalist(e.target.value)}
								variant='outlined'
								className='assign-analyst'
							>
								<option value={0}>Atribuir Analista</option>
								<option value={10}>Henrique</option>
								<option value={20}>Cristiano</option>
								<option value={30}>Gilberto</option>
							</Select>
							<div className='cost-center-title'>Centro de Custo</div>
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
