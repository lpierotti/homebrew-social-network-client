import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoginForm from '../LoginForm'

describe('LoginForm Component', () => {
	it('should render without throwing an error', () => {
		expect(shallow(<LoginForm />).contains(<div></div>)).toBe(true)
	})
})