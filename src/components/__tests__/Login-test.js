import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from '../Login'

describe('Login Component', function() {
	
	it('should render without throwing an error', function() {
		expect(shallow(<Login />).exists(<form className='login'></form>)).toBe(true)
	})

	it('renders a email input', function() {
		expect(shallow(<Login />).find('#email').length).toEqual(1)
	})

	it('renders a password input', function() {
		expect(shallow(<Login />).find('#password').length).toEqual(1)
	})
	
	describe('Email input', function() {
		
		it('should respond change and change the state of the Login Component', function() {
			const wrapper = shallow(<Login />)
			wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}})
			expect(wrapper.state('email')).toEqual('blah@gmail.com')
		})
	})
	
	describe('Password input', function() {
		
		it('should respond change and change the state of the Login Component', function() {
			const wrapper = shallow(<Login />)
			wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}})
			expect(wrapper.state('password')).toEqual('cats')
		})
	})
})