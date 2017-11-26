import React from 'react';
import { mount } from 'enzyme';
import { FollowingContainer } from '../FollowingContainer';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom'

describe('Following container', () =>{
	it('renders correctly', () => {
		const tree = renderer.create(
			<FollowingContainer follows={[]} followers={[]} getFollows={() => {}}/>
		).toJSON();
		expect(tree).toMatchSnapshot();
	})

	const mockGetFollowsfn = jest.fn()
	let wrapper;
	beforeAll(() => {
		let dummyFollows = [{id: 1, username: 'joe'}]
		let dummyFollowers = [{id: 2, username: 'bob'}]
		wrapper = mount(<StaticRouter context={{}}><FollowingContainer id={88} follows={dummyFollows} followers={dummyFollowers} getFollows={mockGetFollowsfn}/></StaticRouter>)
	})
	afterAll(() => {
		wrapper.unmount()
	})

	it('renders the div for the container', () => {
		expect(wrapper.find('.followingContainer').length).toBe(1)
	})

	it('renders the follows and followers headers', () => {
		expect(wrapper.find('h2').length).toBe(2)
	})

	describe('the getFollows function operates correctly', () => {
		it('calls the getFollows function when it is mounted', () => {
			expect(mockGetFollowsfn.mock.calls.length).toBe(1)
		})

		it('gets called with the correct argument', () => {
			expect(mockGetFollowsfn.mock.calls[0][0]).toBe(88)
		})

	})

	describe('the follows div', () => {

		it('successfully renders a follow display when there is a follow', () => {
			expect(wrapper.find('img').length).toBe(2)
			expect(wrapper.findWhere(n => n.type() === 'a' && n.text() === 'joe').exists()).toEqual(true)
		})
	})

	describe('the follower div', () => {

		it('successfully renders a follow display when there is a follower', () => {
			expect(wrapper.find('img').length).toBe(2)
			expect(wrapper.findWhere(n => n.type() === 'a' && n.text() === 'bob').exists()).toEqual(true)
		})
	})


})