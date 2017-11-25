import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { GroupForm } from '../GroupForm';
import renderer from 'react-test-renderer';

describe('GroupForm component', () => {

	it('should render without throwing an error', () => {
		expect(shallow(<GroupForm getAllUsers={() => {}}/>).exists(<div className='Form'></div>)).toBe(true)
	})
})