import { ACTIONS } from "./session-actions";
import { REQUEST_STATE } from 'globals/constants';

export const defaultState = {
	token: null,
	status: REQUEST_STATE.DORMANT
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTIONS.SESSION_FETCH_REQUEST:
			return {...state, token: action.token, status: REQUEST_STATE.REQUEST };
		case ACTIONS.SESSION_FETCH_SUCCESS:
			return {...state, token: action.token, status: REQUEST_STATE.SUCCESS };
		case ACTIONS.SESSION_FETCH_FAILURE:
			return {...state, token: null, status: REQUEST_STATE.FAILURE };
	  default: return state;
	}
};

export default reducer;
