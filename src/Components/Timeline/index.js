import React, { Fragment } from 'react';
import CardTimeLineExpense from '../CardTimeline/Expense';
import CardTimeLineEvaluation from '../CardTimeline/Evaluation';
import CardTimeLineAccountability from '../CardTimeline/Accountability';

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
		<Fragment>
			{data &&
				data.map((item, key) => {
					return <Fragment>{getCardTimeLine(item, key)}</Fragment>;
				})}
		</Fragment>
	);
};

export default Timeline;