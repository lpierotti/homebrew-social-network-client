import React from 'react';
import { shallow, mount, render } from 'enzyme';
import FollowDisplay from '../FollowDisplay';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom'

describe('FollowDisplay component', () => {

	it('renders correctly', () => {
		const tree = renderer.create(
			<StaticRouter context={{}}><FollowDisplay data={{}}/></StaticRouter>
		).toJSON();
		expect(tree).toMatchSnapshot();
	})
})