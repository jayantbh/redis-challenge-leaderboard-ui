import { ACTIONS } from "./home-actions";
import { REQUEST_STATE } from 'globals/constants';

export const defaultState = {
	data: null,
	status: REQUEST_STATE.DORMANT
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTIONS.HOME_FETCH_REQUEST:
			return {...state, status: REQUEST_STATE.REQUEST };
		case ACTIONS.HOME_FETCH_SUCCESS:
			return {...state, data: action.payload, status: REQUEST_STATE.SUCCESS };
		case ACTIONS.HOME_FETCH_FAILURE:
			return {...state, data: null, status: REQUEST_STATE.FAILURE };
	  default: return state;
	}
};

export default reducer;
