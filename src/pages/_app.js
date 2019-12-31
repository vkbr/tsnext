import React from 'react';
import App from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline, createMuiTheme, Container as MuiContainer } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import PageLayout from './_pageLayout';
import createStore from '../store/createStore';

const store = createStore();

const theme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<ReduxProvider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<MuiContainer maxWidth={false}>
						<PageLayout>
							<Component {...pageProps} />
						</PageLayout>
					</MuiContainer>
				</ThemeProvider>
			</ReduxProvider>
		);
	}
}

export default MyApp;