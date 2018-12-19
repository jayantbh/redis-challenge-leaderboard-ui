import React from 'react';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';

import { RESOURCE_STATE } from 'views/Home/home-reducer';
import Home from '../';

it('renders routes if authenticated', () => {
	const wrapper = shallow(<Home sessionStatus={RESOURCE_STATE.AUTHENTICATED} checkAuthentication={jest.fn()} />);
	expect(wrapper.find(Route).length).toBeGreaterThan(1);
});

it('does not render routes if not auth failed', () => {
	const wrapper = shallow(<Home sessionStatus={RESOURCE_STATE.AUTH_FAILED} checkAuthentication={jest.fn()} />);
	expect(wrapper.find(Route).length).toBe(0);
});

it('does not render routes if not auth pending', () => {
	const wrapper = shallow(<Home sessionStatus={RESOURCE_STATE.UNAUTHENTICATED} checkAuthentication={jest.fn()} />);
	expect(wrapper.find(Route).length).toBe(0);
});
