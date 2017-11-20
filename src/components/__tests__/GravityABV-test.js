import React from 'react';
import { shallow, mount, render } from 'enzyme';
import GravityABV from '../GravityABV';
import renderer from 'react-test-renderer';

describe('GravityABV component', () => {

	it('renders correctly', () => {
		const tree = renderer.create(
			<GravityABV changeGravity={() => {}} data={{}}/>
		).toJSON();
		expect(tree).toMatchSnapshot();
	})
})