import React, { Component } from 'react';
import { connect } from 'react-redux';
import { parse } from 'query-string';
import { Link, withRouter, Route } from 'react-router-dom';

import { ROUTES, PARAMETRIZED_ROUTES } from 'routes';
import { SESSION_FETCH_REQUEST } from './session-actions';
import { RESOURCE_STATE } from './session-reducer';
import { parametrizePath } from 'utils/transition';

import css from './styles.module.scss';

type Props = {
	sessionStatus: string
}

class Home extends Component<Props> {
	componentDidMount() {
		let { authToken } = parse(window.location.search);
		this.props.checkAuthentication(authToken);
	}

	render() {
		switch(this.props.sessionStatus) {
			case RESOURCE_STATE.AUTHENTICATED:
			case RESOURCE_STATE.AUTH_FAILED:
				return (<h3>Authentication Failed...<br />Reauthentication required.</h3>);
			default:
				return (<h3>Authentication Pending...</h3>);
		}
	}
}

const mapStateToProps = ({ session: { status } }) => {
  return { sessionStatus: status };
};

const mapDispatchToProps = dispatch => {
	return {
		checkAuthentication: (token) => { dispatch(SESSION_FETCH_REQUEST({ token })) }
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
