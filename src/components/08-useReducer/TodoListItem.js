import React from 'react'

export const TodoListItem = ( {todo, idx, handleDelete, handleToggle }) => {
	return (
		// todoListItem, argumentos: todo, index, handleDelete, handleToogle
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
	)
}
