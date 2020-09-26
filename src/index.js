import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './app';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './locales';
import './style.css';

const theme = createMuiTheme({
	typography: {
		fontFamily: "'Nunito Sans', sans-serif",
		color: '#545b64'
	},
	palette: {
		primary: {
			main: '#51c1c3',
			contrastText: '#ffffff'
		}
	},
	overrides: {
		MuiTypography: {
			colorTextPrimary: {
				color: '#545b64'
			},
			colorTextSecondary: {
				color: '#51c1c3'
			}
		},
		MuiPaper: {
			root: {
				margin: '24px',
				fontFamily: "'Nunito Sans', sans-serif",
				color: '#545b64'
			},
			rounded: { borderRadius: '6px' }
		},
		MuiBreadcrumbs: {
			ol: {
				padding: '12px 12px 12px 24px',
				fontSize: '16px'
			}
		},
		MuiAvatar: {
			root: {
				width: '59px',
				height: '59px'
			},
			colorDefault: {
				color: '#fafafa',
				backgroundColor: '#f0f3f7'
			}
		},
		MuiOutlinedInput: {
			input: {
				padding: 10
			}
		},
		MuiChip: {
			outlined: {
				backgroundColor: '#f0f3f7',
				fontSize: 11
			}
		}
	}
});

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
