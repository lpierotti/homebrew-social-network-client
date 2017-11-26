import React from 'react';
import { mount } from 'enzyme';
import GravityABV from '../GravityABV';
import renderer from 'react-test-renderer';

describe('GravityABV component', () => {

	it('renders correctly', () => {
		const tree = renderer.create(
			<GravityABV changeGravity={() => {}} data={{}}/>
		).toJSON();
		expect(tree).toMatchSnapshot();
	})

	const mockChangeGravityfn = jest.fn();
	let wrapper;
	
	beforeAll(() => {
		wrapper = mount(<GravityABV changeGravity={mockChangeGravityfn} data={{}}/>)
	})

	describe('input changes', () =>{

		it('calls the changeGravity function when OG is changed', () => {
			wrapper.find('input[name="og"]').simulate('change', {target: {name: 'og', value: '1.000'}})
			expect(mockChangeGravityfn.mock.calls.length).toBe(1)
		}) 
		it('calls the changeGravity function when FG is changed', () => {
			wrapper.find('input[name="fg"]').simulate('change', {target: {name: 'fg', value: '1.000'}})
			expect(mockChangeGravityfn.mock.calls.length).toBe(2)
		}) 
	})
})