import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd'

describe('Test on <TodoAdd />', () => {

	const handleAddTodo = jest.fn();
	const wrapper = shallow(
		<TodoAdd
			handleAddTodo = { handleAddTodo }
		/>
	)

	test('should be shown correctly', () => {
		expect( wrapper ).toMatchSnapshot();
	});


	test('should not call the handleAddTodo', () => {
		const formSubmit = wrapper.find('form').prop('onSubmit');
		//Se comprueba que formSubmit es igual a una funcion
		// console.log(formSubmit);

		formSubmit({ preventDefault(){}});
		expect( handleAddTodo ).toHaveBeenCalledTimes(0);
	});


	test('should call the handleAddTodo function with one args', () => {
		const value = 'New Tast';

		wrapper.find('input').simulate('Change', {
			 target: {
				value,
				name: 'description'
			}
		});
		const formSubmit = wrapper.find('form').prop('onSubmit');
		formSubmit({ preventDefault(){}});

		expect( handleAddTodo ).toHaveBeenCalledTimes(1);
		expect( handleAddTodo ).toHaveBeenCalledWith(expect.any(Object));
		expect( handleAddTodo ).toHaveBeenCalledWith({
			id: expect.any(Number),
			desc: value,
			done: false
		});

		// Se comprueba que se realiza el reset
		expect( wrapper.find('input').prop('value')).toBe("");

	})
})
