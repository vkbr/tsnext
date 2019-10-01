import * as React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    'html, body, #__next': {
      height: '100%',
    },
  },
	container: {
		height: '100%',
		display: 'flex',
	},
	content: {
		flex: 1,
		padding: `0 ${theme.spacing(1)}px ${theme.spacing(2)}px`,
	},
	appBar: {
		padding: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
}));

const Layout: React.SFC = (props) => {
	const classes = useStyles(props);

	return (
		<>
			<Head>
				<title>TSNext</title>
			</Head>
			<div className={classes.container}>
				<main className={classes.content}>
					{props.children}
				</main>
			</div>
		</>
	);
}

export default Layout;
