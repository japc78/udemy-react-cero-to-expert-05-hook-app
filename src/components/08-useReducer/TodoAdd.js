import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
	// Al manejar solo un campo (input) se puede hacer destructuracion del objeto y extraer la descripcion.
	const [{ description }, handelInputChange, reset ] = useForm({
		description: '',
	});
	// console.log(description);


	// Manejador del formulario.
	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false
		};

		handleAddTodo(newTodo);
		reset();
	}

	return (
		<>
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
		</>
	)
}
