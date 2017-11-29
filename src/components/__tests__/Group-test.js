import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Group } from '../Group';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom'

describe('Group component', () => {

	it('renders correctly', () => {
		const tree = renderer.create(
			<StaticRouter context={{}}><Group id={1} groupInfo={{}} events={[]}/></StaticRouter>
		).toJSON();
		expect(tree).toMatchSnapshot();
	})
})