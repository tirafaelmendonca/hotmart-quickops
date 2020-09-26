import React, { Fragment } from 'react';
import CardTimeLineExpense from './card/expense';
import CardTimeLineEvaluation from './card/evaluation';
import CardTimeLineAccountability from './card/accountability';

import './style.css';

const Timeline = ({ data }) => {
	const getCardTimeLine = (item, key) => {
		switch (item.cardType) {
			case 'EXPENSE':
				return <CardTimeLineExpense key={key} data={item} />;
			case 'EVALUATION':
				return <CardTimeLineEvaluation key={key} data={item} />;
			case 'ACCOUNTABILITY_SUBMITTED':
				return <CardTimeLineAccountability key={key} data={item} />;
			case 'ACCOUNTABILITY_CREATED':
				return <CardTimeLineAccountability key={key} data={item} />;
		}
	};

	return (
		<div className='timeline'>
			{data &&
				data.map((item, key) => {
					return <Fragment>{getCardTimeLine(item, key)}</Fragment>;
				})}
		</div>
	);
};

export default Timeline;
