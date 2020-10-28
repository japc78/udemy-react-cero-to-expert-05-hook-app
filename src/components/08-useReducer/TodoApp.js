import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm'
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

	// Al manejar solo un campo (input) se puede hacer destructuracion del objeto y extraer la descripcion.
	const [{ description }, handelInputChange, reset ] = useForm({
		description: '',
	});
	console.log(description);


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


	// Manejador del formulario.
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("add task");

		if (description.trim().length <= 1) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false
		};

		const action = {
			type: 'add',
			payload: newTodo
		}
		dispatch(action);
		reset();
	}

	return (
		<div>
			<h1>TodoApp ({ todos.length })</h1>
			<hr/>

			<div className="row">
				<div className="col-7">
					<ul className="list-group list-group-flush">
						{
							todos.map((todo, idx) => (
								<li
									key={todo.id}
									className="list-group-item"
								>
									<p
										onClick={ () => handleToggle(todo.id) }
										className={ `${ todo.done && 'complete'}` }>
											{idx + 1}. {todo.desc}
									</p>
									<button
										onClick= { () => handleDelete(todo.id) }
										className="btn btn-sm btn-danger">
											borrar
									</button>

								</li>
							))
						}
					</ul>
				</div>
				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr/>

					<form onSubmit= { handleSubmit }>
						<input
							type="text"
							name="description"
							onChange={ handelInputChange }
							className="form-control"
							placeholder="Aprender ..."
							value={ description }
							autoComplete="off"/>

						<button
							type="submit"
							className="btn btn-sm btn-outline-primary mt-1 btn-block"
						>
							Agregar
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
