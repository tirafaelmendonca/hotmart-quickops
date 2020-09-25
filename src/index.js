import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import './style.css';

const theme = createMuiTheme({
	typography: {
		fontFamily: "'Nunito Sans', sans-serif",
		color: '#545b64'
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
		MuiInputBase: {
			input: {
				backgroundColor: '#ffffff'
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
			<App />
		</ThemeProvider>
	</StrictMode>,
	document.getElementById('root')
);
