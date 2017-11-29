import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { EventForm } from '../EventForm';
import renderer from 'react-test-renderer';
import Provider from 'react-redux'

describe('EventForm component', () => {

	it('renders correctly', () => {
		const tree = renderer.create(
			<EventForm />
		).toJSON();
		expect(tree).toMatchSnapshot();
	})
})