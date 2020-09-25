import React, { useEffect, useState } from 'react';
import { Header, Timeline, SideBar } from '../../Components';
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

	const [
		sidebar,
		setSidebar
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

		axios
			.get('https://api-front-end-challenge.buildstaging.com/api/sidebar')
			.then(result => {
				setSidebar(result.data.content);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div className='solicitation'>
			<div className='core'>
				<Header data={header} />
				<Timeline data={timeline} />
			</div>
			<div className='side'>
				<SideBar data={sidebar} />
			</div>
		</div>
	);
};

export default Solicitation;
