import React from 'react';
import { shallow, mount, render } from 'enzyme';
import EventContainer from '../EventContainer';
import renderer from 'react-test-renderer';

describe('EventContainer component', () => {

	it('renders correctly', () => {
		const tree = renderer.create(
			<EventContainer />
		).toJSON();
		expect(tree).toMatchSnapshot();
	})
})