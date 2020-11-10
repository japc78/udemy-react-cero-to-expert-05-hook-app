import '@testing-library/jest-dom'
import { todoReducer } from '../../components/08-useReducer/todoReducer'
import { demoTodos } from './fixtures/demoTodos';

describe('Tests on function todoReducer()', () => {

	test('should return to the default state', () => {

		// Los reducer siempre retornan un estado
		// le enviamos el array con los objetos y una accion en este caso vacia
		const state = todoReducer( demoTodos, {} );
		expect( state ).toEqual( demoTodos );
	});

	test('should to add a TODO', () => {
		const newTodo = {
			id: 3,
			desc: 'Aprender Node',
			done: false
		}

		const action =  {
			type: 'add',
			payload: newTodo
		}

		const state = todoReducer( demoTodos, action);
		expect( state ).toEqual( [...demoTodos, newTodo] );
	});


	test('should to Delete a TODO', () => {
		//action.payloda = Id del TODO
		const action = {
			type: 'delete',
			payload: 1
		}

		const state = todoReducer( demoTodos, action);
		// se comprueba que solo tiene uno
		expect( state.length ).toBe(1);

		// se comprueba cual es el exactamente el que queda.
		expect(state).toEqual([demoTodos[1]])
	});

	test('should to do the Toogle of The TODO ', () => {
		const action = {
			type: 'toggle',
			payload: 1
		}

		const state = todoReducer( demoTodos, action);
		// console.log(todo);
		expect ( state[0].done ).toBe(true);
		expect ( state[1] ).toEqual( demoTodos[1] );
	});
})
