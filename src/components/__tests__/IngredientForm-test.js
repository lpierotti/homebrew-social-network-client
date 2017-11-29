import React from 'react';
import { shallow, mount, render } from 'enzyme';
import IngredientForm from '../IngredientForm';
import renderer from 'react-test-renderer';

describe('IngredientForm Component', () => {

	it('should render without throwing an error', () => {
		expect(shallow(<IngredientForm changeIngredient={() => {}} addIngredient={() => {}} removeIngredient={() => {}} data={{}}/>).exists(<form></form>)).toBe(true)
	})
})