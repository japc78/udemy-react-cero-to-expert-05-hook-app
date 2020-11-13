import React from 'react'
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from './fixtures/demoTodos';

describe('Test on <TodoListItem />', () => {

	const  handleDelete = jest.fn();
	const  handleToggle = jest.fn();
	const wrapper = shallow(
		<TodoListItem
			todo = { demoTodos[0] }
			idx = { 0 }
			handleDelete = { handleDelete }
			handleToggle = { handleToggle }
		/>)


	test('should be shown correctly', () => {
		//snapshot
		expect(wrapper).toMatchSnapshot();
	});


	test('should call the handleDelete function', () => {
		// jest.fn()??
		// toHaveBeenCalled
		// toHaveBeenCalledWith
		wrapper.find('button').simulate('click');
		expect(handleDelete).toHaveBeenCalled();
		expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
		expect(handleDelete).toHaveBeenCalledWith(expect.any(Number));
	})


	test('should call the handleToggle function', () => {
		//jest.fn()??
		// toHaveBeenCalledWith
		wrapper.find('p').simulate('click');
		expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
	})


	test('should be shown the text correctly ', () => {
		//contenido del párrafo
		const text = wrapper.find('p').text().trim();
		expect(text).toEqual("1. Aprender React");
		expect(text).toBe(`1. ${demoTodos[0].desc}`);
	})


	test('should have class "complete" if TODO.done = true', () => {
		const todo = demoTodos[0];
		todo.done=true;

		const wrapper = shallow(<TodoListItem todo = { todo }/>)
		expect(wrapper.find('p').hasClass('complete')).toBe(true);
	})

})