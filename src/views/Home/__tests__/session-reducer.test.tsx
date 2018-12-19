import reducer, { defaultState, RESOURCE_STATE } from '../session-reducer';
import {
	SESSION_FETCH_REQUEST, SESSION_FETCH_SUCCESS, SESSION_FETCH_FAILURE
} from '../session-actions';

const TOKEN = "some-random-string";

describe('session reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(defaultState);
	});

	it('should handle SESSION_FETCH_REQUEST', () => {
		expect(reducer(defaultState, SESSION_FETCH_REQUEST())).toEqual({...defaultState, token: undefined, status: RESOURCE_STATE.AUTHENTICATING });
	});

	it('should handle SESSION_FETCH_SUCCESS', () => {
		expect(reducer(defaultState, SESSION_FETCH_SUCCESS({ token: TOKEN }))).toEqual({ ...defaultState, token: TOKEN, status: RESOURCE_STATE.AUTHENTICATED });
	});

	it('should handle SESSION_FETCH_FAILURE', () => {
		expect(reducer(defaultState, SESSION_FETCH_FAILURE())).toEqual({ ...defaultState, token: null, status: RESOURCE_STATE.AUTH_FAILED });
	});
});
