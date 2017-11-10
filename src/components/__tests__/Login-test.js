import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from '../Login'

describe('Login Component', () => {
	it('should render without throwing an error', () => {
		expect(shallow(<Login />).contains(<form></form>).toBe(true))
	})
})