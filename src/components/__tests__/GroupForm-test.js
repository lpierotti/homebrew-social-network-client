import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { GroupForm } from '../GroupForm';
import renderer from 'react-test-renderer';

describe('GroupForm component', () => {

	let wrapper;
	let mockCreateGroupfn, mockGetAllUsersfn;
	beforeAll(() => {
		mockCreateGroupfn = jest.fn();
		mockGetAllUsersfn = jest.fn();
		wrapper = shallow(<GroupForm getAllUsers={mockGetAllUsersfn} createGroup={mockCreateGroupfn} allUsers={[]} curretnUser={{}}/>);
	})

	it('should render without throwing an error', () => {
		expect(wrapper.exists(<div className='Form'></div>)).toBe(true)
	})
})