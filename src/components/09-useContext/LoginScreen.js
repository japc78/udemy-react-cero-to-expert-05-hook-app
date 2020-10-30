import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
	// Tarea.
	// 1. Obtener la referencia al context
	// 2. Extrare el setUser
	const { setUser } = useContext(UserContext)

	// 3. Enviar el objeto con setUser
	//  {
	// 	id: 1234,
	// 	name: 'Bitcero',
	// 	email: 'dev@bitcero.com'
	// }

	const newUser =  {
		id: 1234,
		name: 'Bitcero',
		email: 'dev@bitcero.com'
	}

	const handleLogin = () => {
		setUser(newUser)
	}

	return (
		<div>
			<h1>LoginScreen</h1>
			<hr/>

			<button
				className="btn btn-primary"
				onClick={ handleLogin }
			>
					Login
			</button>
		</div>
	)
}
