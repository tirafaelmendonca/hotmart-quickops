import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import './style.css';

const theme = createMuiTheme({
	typography: {
		fontFamily: "'Nunito Sans', sans-serif"
	},
	overrides: {
		MuiTypography: {
			colorTextSecondary: {
				color: '#51c1c3'
			}
		},
		MuiPaper: {
			rounded: { borderRadius: '6px' },
			root: { margin: '24px', fontFamily: "'Nunito Sans', sans-serif" }
		},
		MuiBreadcrumbs: {
			ol: {
				padding: '12px 12px 12px 24px',
				fontSize: '16px'
			}
		}
	}
});

ReactDOM.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>,
	document.getElementById('root')
);
