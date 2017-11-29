import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { RecipeForm } from '../RecipeForm';
import renderer from 'react-test-renderer';

describe('RecipeForm component', () => {

	it('should render without throwing an error', () => {
		expect(shallow(<RecipeForm />).exists(<div className='Form'></div>)).toBe(true)
	})
})