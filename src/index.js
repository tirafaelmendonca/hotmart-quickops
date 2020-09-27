import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ThemeProvider } from '@material-ui/core/styles';
import { I18nextProvider } from 'react-i18next';
import {
	faAngleDown,
	faAsterisk,
	faBus,
	faConciergeBell,
	faEdit,
	faFileAlt,
	faFilter,
	faReceipt,
	faUsers,
	faUtensils
} from '@fortawesome/free-solid-svg-icons';
import App from '$/app';
import { i18n } from '$/locales';
import theme from '$/theme';
import './style.css';

library.add(
	faBus,
	faReceipt,
	faFileAlt,
	faConciergeBell,
	faUtensils,
	faFilter,
	faEdit,
	faAsterisk,
	faUsers,
	faAngleDown
);

ReactDOM.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<I18nextProvider i18n={i18n}>
				<App />
			</I18nextProvider>
		</ThemeProvider>
	</StrictMode>,
	document.getElementById('root')
);
