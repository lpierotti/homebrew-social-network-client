import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { GroupList } from '../GroupList';
import renderer from 'react-test-renderer';

describe('GroupList component', () => {

	it('renders correctly', () => {
		const tree = renderer.create(
			<GroupList userGroups={[]} getGroups={() => {}}/>
		).toJSON();
		expect(tree).toMatchSnapshot();
	})
})