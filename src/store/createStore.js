import { createStore, applyMiddleware } from 'redux';

import reducers from '.';

export default () => {
	const store = createStore(
		reducers,
	);

	return store;
}

