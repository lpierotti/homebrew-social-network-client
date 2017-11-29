import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { LoginForm } from '../LoginForm';
import renderer from 'react-test-renderer';

describe('LoginForm Component', () => {

	it('should render without throwing an error', () => {
		expect(shallow(<LoginForm />).exists(<form></form>)).toBe(true)
	})
})