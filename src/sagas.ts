import { takeLatest } from 'redux-saga/effects';

import { ACTIONS } from 'views/Home/home-actions';

import * as Tasks from 'views/Home/home-tasks';

const sagas = [
	function * watchSessionRequests () {
		yield takeLatest(ACTIONS.HOME_FETCH_REQUEST, Tasks.getData)
	}
];

export default sagas;
