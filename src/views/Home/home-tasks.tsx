import { put } from 'redux-saga/effects';

import { get } from 'utils/http';
import API from 'apis';
import { store } from 'index';

import {
	HOME_FETCH_SUCCESS, HOME_FETCH_FAILURE
} from './home-actions';

export function* getData() {
	try {
		let data = yield get(API.JSON);
		return yield put(HOME_FETCH_SUCCESS(data));
	}
	catch (e) {
		console.error(e);
		return yield put(HOME_FETCH_FAILURE());
	}
}
