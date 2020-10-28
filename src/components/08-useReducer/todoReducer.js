

export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'add':
			return [ ...state, action.payload]

		case 'delete':
			//filter retorna un nuevo array.
			// En este caso devuleve un array con todos aquelos elementos que sean distintos al id pasado por el payload.
			return state.filter(todo => todo.id !== action.payload);

		// Forma larga
		case 'toggle-old':
			return state.map(todo => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done
					}

				}else {
					return todo;
				}
			})


		// Forma corta con return implicito en el map y ternario.
		case 'toggle':
			return state.map( todo =>
				( todo.id === action.payload )
					? {...todo, done: !todo.done}
					: todo
			)

		default:
			return state;
	}
}