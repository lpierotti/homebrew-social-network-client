import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Chat from '../Chat';
import renderer from 'react-test-renderer';
import ActionCableProvider from 'react-actioncable-provider'

describe('Chat component', () => {

	it('renders correctly', () => {
		const tree = renderer.create(
			<ActionCableProvider url={`url`}><Chat id={1} messages={[]} getGroupInfo={() => {}}/></ActionCableProvider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	})
})