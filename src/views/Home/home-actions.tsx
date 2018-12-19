import { ReduxAction } from 'types';

export const ACTIONS = {
	HOME_FETCH_REQUEST: "HOME_FETCH_REQUEST",
	HOME_FETCH_SUCCESS: "HOME_FETCH_SUCCESS",
	HOME_FETCH_FAILURE: "HOME_FETCH_FAILURE"
};

export function HOME_FETCH_REQUEST(payload: {} = {}) : ReduxAction {
	return { type: ACTIONS.HOME_FETCH_REQUEST, payload }
}

export function HOME_FETCH_SUCCESS(payload: {} = {}) : ReduxAction {
	return { type: ACTIONS.HOME_FETCH_SUCCESS, payload }
}

export function HOME_FETCH_FAILURE(payload: {} = {}) : ReduxAction {
	return { type: ACTIONS.HOME_FETCH_FAILURE, payload }
}
