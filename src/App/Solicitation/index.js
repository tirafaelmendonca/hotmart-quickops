import React, { useEffect, useState } from 'react';
import { Box, Avatar } from '@material-ui/core';
import { Header, Timeline, Card, SideBar } from '../../Components';
import { faMoneyCheckAlt, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import axios from 'axios';

const Solicitation = () => {
	const [
		header,
		setHeader
	] = useState();

	const [
		timeline,
		setTimeline
	] = useState();

	useEffect(async () => {
		axios
			.get('https://api-front-end-challenge.buildstaging.com/api/header')
			.then(result => {
				setHeader(result.data);
			})
			.catch(error => {
				console.log(error);
			});

		axios
			.get('https://api-front-end-challenge.buildstaging.com/api/timeline')
			.then(result => {
				console.log(result.data.content);
				setTimeline(result.data.content);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<Box display='flex'>
			<Box display='flex' flexDirection='column' width='85%'>
				<Header data={header} />
				<Timeline data={timeline} />
			</Box>
			<Box display='flex' className='sidebar' flexDirection='column' width='15%'>
				<SideBar />
			</Box>
		</Box>
	);
};

export default Solicitation;
