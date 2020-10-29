import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm'

import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

import './styles.css'
export const TodoApp = () => {

	// Estado inicial, se le pasa al useReducer
	// const initialState = [{
	// 	id: new Date().getTime(),
	// 	desc: 'Aprender React',
	// 	done: false
	// }]

	const init = () => {
		// return [{
		// 	id: new Date().getTime(),
		// 	desc: 'Aprender React',
		// 	done: false
		// }]

		// Se recoge la informacion guardada en el localstore
		// Si JSON.parse(localStorage.getItem('todos')) es null retornara un array vacio.
		return JSON.parse(localStorage.getItem('todos')) || []
	}

	const [ todos, dispatch ] = useReducer(todoReducer, [], init);
	// console.log(todos);




	// Se utiliza useEffect para que cada vez que se actualize el estado todos, se grabe en localstore.
	// Se pasa a JSON con stringify los todos ya que localstore solo permite guardar en String.
	useEffect( () => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])


	const handleDelete = ( todoId ) => {
		console.log("Aqui: " + todoId);

		//Tarea
		// Crear la action
		const action = {
			type: 'delete',
			payload: todoId
		}

		// hacer el dispach
		dispatch(action);
	}

	const handleToggle = (todoId) => {
		dispatch({
			type: 'toggle',
			payload: todoId
		})
	}


	const handleAddTodo = ( newTodo ) => {
		dispatch({
			type: 'add',
			payload: newTodo
		})
	}

	return (
		<div>
			<h1>TodoApp ({ todos.length })</h1>
			<hr/>

			<div className="row">
				<div className="col-7">
					<TodoList
						todos = { todos }
						handleDelete = { handleDelete }
						handleToggle = { handleToggle }
					/>
				</div>

				<div className="col-5">
					<TodoAdd handleAddTodo = { handleAddTodo }/>
				</div>
			</div>
		</div>
	)
}
