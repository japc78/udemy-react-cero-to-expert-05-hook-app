import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { TodoList } from '../../../components/08-useReducer/TodoList'
import { demoTodos } from './fixtures/demoTodos'

describe('Test on <TodoList/>', () => {

	const handleDelete = jest.fn();
	const handleToggle = jest.fn();

	const wrapper = shallow(
		<TodoList todos= { demoTodos }
			handleDelete = { handleDelete }
			handleToggle = { handleToggle }
		/>
	);


	test('should be shown correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});


	test('should have two <TodoListItem />', () => {
		// console.log(wrapper.find('TodoListItem').length);
		expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

		// Se muestra por consola las props de uno de los componentes
		// console.log(wrapper.find('TodoListItem').at(0).props());

		// Se muestra una prop del componente
		// console.log(wrapper.find('TodoListItem').at(0).prop(handleDelete));

		// Comprueba que en la prop "handleDelete" del componente se espera una funcion.
		expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
		// expect(wrapper.find('TodoListItem').at(1).prop('handleToggle')).toEqual(expect.any(Function));
	});
});
