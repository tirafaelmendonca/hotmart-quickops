import React, { Fragment } from 'react';
import CardTimeLineExpense from './card/expense';
import CardTimeLineEvaluation from './card/evaluation';
import CardTimeLineAccountability from './card/accountability';
import './style.css';

const Timeline = ({ data }) => {
	const getCardTimeLine = item => {
		switch (item.cardType) {
			case 'EXPENSE':
				return <CardTimeLineExpense data={item} />;
			case 'EVALUATION':
				return <CardTimeLineEvaluation data={item} />;
			case 'ACCOUNTABILITY_SUBMITTED':
				return <CardTimeLineAccountability data={item} />;
			case 'ACCOUNTABILITY_CREATED':
				return <CardTimeLineAccountability data={item} />;
			default:
				return <CardTimeLineExpense data={item} />;
		}
	};

	return (
		<div className='timeline'>
			{data &&
				data.map((item, key) => {
					return <Fragment key={key}>{getCardTimeLine(item)}</Fragment>;
				})}
		</div>
	);
};

export default Timeline;
