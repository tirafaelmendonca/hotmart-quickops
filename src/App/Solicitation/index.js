import React, { Fragment } from 'react';
import { Box } from '@material-ui/core';
import { Header, Card, SideBar } from '../../Components';

const Solicitation = () => {
	return (
		<Box display='flex'>
			<Box display='flex' flexDirection='column' width='85%'>
				<Header>
					<Box padding='24px' color='#ffffff'>
						<Box fontSize='20px' fontWeight='bold' marginBottom='24px'>
							Reembolso
						</Box>
						<Box display='flex' flexGrow='1'>
							<Box flexDirection='column' width='33%' borderRight='solid 1px'>
								<Box display='flex' flexDirection='row'>
									<Box
										display='flex'
										flexDirection='column'
										width='20%'
										alignItems='flex-end'
										fontSize='14px'
										marginBottom='12px'
									>
										Justificativa
									</Box>
									<Box
										display='flex'
										flexDirection='column'
										width='80%'
										paddingLeft='30px'
										paddingRight='30px'
										alignItems='flex-start'
										fontSize='14px'
										marginBottom='12px'
									>
										Reembolso referente a confraternização das equipes Backoffice / BI / Analytics.
									</Box>
								</Box>
								<Box display='flex' flexDirection='row'>
									<Box
										display='flex'
										flexDirection='column'
										width='20%'
										alignItems='flex-end'
										fontSize='14px'
										marginBottom='12px'
									>
										Finalidade
									</Box>
									<Box
										display='flex'
										flexDirection='column'
										width='80%'
										paddingLeft='30px'
										alignItems='flex-start'
										fontSize='14px'
										marginBottom='12px'
									>
										Confraternização
									</Box>
								</Box>
								<Box display='flex' flexDirection='row'>
									<Box
										display='flex'
										flexDirection='column'
										width='20%'
										alignItems='flex-end'
										fontSize='14px'
										marginBottom='12px'
									>
										Quantidade
									</Box>
									<Box
										display='flex'
										flexDirection='column'
										width='80%'
										paddingLeft='30px'
										alignItems='flex-start'
										fontSize='14px'
										marginBottom='12px'
									>
										33 pessoas
									</Box>
								</Box>
								<Box display='flex' flexDirection='row'>
									<Box
										display='flex'
										flexDirection='column'
										width='20%'
										alignItems='flex-end'
										paddingRight='30px'
										fontSize='14px'
										marginBottom='12px'
									>
										Projeto
									</Box>
									<Box
										display='flex'
										flexDirection='column'
										width='80%'
										paddingLeft='30px'
										alignItems='flex-start'
										fontSize='14px'
										marginBottom='12px'
									>
										-
									</Box>
								</Box>
							</Box>
							<Box
								display='flex'
								flexDirection='column'
								width='33%'
								borderRight='solid 1px'
								alignItems='center'
							>
								<Box flexDirection='column' fontSize='14px' marginBottom='12px'>
									Centro de Custo
								</Box>
								<Box fontSize='16px' fontWeight='bold' marginBottom='12px'>
									50% - TEC-DEV-Back Office
								</Box>
								<Box fontSize='16px' fontWeight='bold' marginBottom='12px'>
									50% - BKO-DEV-BI-Analytics
								</Box>
							</Box>
							<Box display='flex' flexDirection='column' width='33%' alignItems='center'>
								<Box flexDirection='column' fontSize='14px' marginBottom='12px'>
									Centro de Custo
								</Box>
								<Box
									flexDirection='column'
									fontSize='14px'
									marginBottom='12px'
									paddingLeft='30px'
									paddingRigth='30px'
								>
									Esta solicitação será paga com o Budget de educação / confraternização.
								</Box>
							</Box>
						</Box>
					</Box>
				</Header>
				<Card>Pagamento</Card>
				<Card>Pagamento</Card>
				<Card>Pagamento</Card>
				<Card>Pagamento</Card>
				<Card>Pagamento</Card>
				<Card>Pagamento</Card>
				<Card>Pagamento</Card>
				<Card>Pagamento</Card>
				<Card>Pagamento</Card>
				<Card>Pagamento</Card>
			</Box>
			<Box display='flex' className='sidebar' flexDirection='column' width='15%'>
				<SideBar />
			</Box>
		</Box>
	);
};

export default Solicitation;
