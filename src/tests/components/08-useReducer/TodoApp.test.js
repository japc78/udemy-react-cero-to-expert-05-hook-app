import React from 'react'
import '@testing-library/jest-dom'
import { mount, shallow } from 'enzyme'
import { TodoApp } from '../../../components/08-useReducer/TodoApp'
import { demoTodos } from './fixtures/demoTodos';
import { act } from 'react-dom/test-utils';

describe('Test on <TodoApp />', () => {

	const wrapper = shallow(<TodoApp />)

	//Para comprobar que se llamar al localstore se crea un mocks de prueba.
	Storage.prototype.setItem = jest.fn(()=>{});

	test('should be shown correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});


	test('should to add one TODO', () => {

		// Mount se utiliza cuando se hace prueba para la app en general con todo
		const wrapper = mount(<TodoApp />);

		//Add los dos todos de demoTodos
		act(()=> {
			demoTodos.forEach(todo => {
				wrapper.find('TodoAdd').prop('handleAddTodo')(todo);
			});
		})

		expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
		expect(localStorage.setItem).toHaveBeenCalledTimes(demoTodos.length);
		// expect(localStorage.setItem).toHaveBeenCalledWith({});
	})

	test('should to delete one TODO', () => {
		// Se llama a la funcion handleAddTodo para agregar a traves de la prop de TodoAdd
		wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
		expect(wrapper.find('h1').text().trim()).toBe('TodoApp (1)');

		// Se llama a la funcion handleDelete para agregar a traves de la prop de TodoList
		wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
		expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
	})
});
