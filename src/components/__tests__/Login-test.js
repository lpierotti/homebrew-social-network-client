import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Login } from '../Login'
import renderer from 'react-test-renderer';


describe('Login Component', () => {
	let wrapper;
	const mockLoginfn = jest.fn();
	
	beforeEach(() => {
		wrapper = shallow(<Login login={mockLoginfn}/>)
	})

	it('renders correctly', () => {
		const tree = renderer.create(
			<Login />
		).toJSON();
		expect(tree).toMatchSnapshot();
	})
	
	it('should render without throwing an error', () => {
		expect(wrapper.exists(<form className='login'></form>)).toBe(true)
	})

	it('renders a email input', () => {
		expect(wrapper.find('#email').length).toEqual(1)
	})

	it('renders a password input', () => {
		expect(wrapper.find('#password').length).toEqual(1)
	})

	
	
	describe('Email input', () => {
		
		it('should respond to change event and change the state of the Login Component', () => {
			wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}})
			expect(wrapper.state('email')).toEqual('blah@gmail.com')
		})
	})
	
	describe('Password input', () => {
		
		it('should respond to change event and change the state of the Login Component', () => {
			wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}})
			expect(wrapper.state('password')).toEqual('cats')
		})
	})

	describe('When the form is submitted', () => {
		it('should call the mock login function', () => {
			wrapper.find('#loginForm').simulate('submit', {preventDefault() {}})
			expect(mockLoginfn.mock.calls.length).toBe(1)
		})
	})
	
})