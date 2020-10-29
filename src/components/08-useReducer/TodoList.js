import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ( { todos, handleDelete, handleToggle } ) => {
	return (
		/* TodoList, argumetnos: todos, handleDelete, handleToogle*/
		<ul className="list-group list-group-flush">
			{
				todos.map((todo, idx) => (
					<TodoListItem
						key = {todo.id}
						todo = { todo }
						idx = { idx }
						handleDelete = { handleDelete }
						handleToggle = { handleToggle }
					/>
				))
			}
		</ul>
	)
}
