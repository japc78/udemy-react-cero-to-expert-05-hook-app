import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

//useEffect nos va permitir realizar algun efecto secundario cuando algo suceda en nuestro componente.

export const SimpleForm = () => {

	const [formState, setFormState] = useState({
		name: '',
		email: ''
	});

	const {name, email} = formState;

	// el segundo argumento el arreglo de dependencias se deja vacio [] para que solo se dipare una vez.
	useEffect(() => {
		// console.log('Hey');
	}, []);


	// Solo cuando cambie el formulario.
	useEffect(() => {
		// console.log('formState cambio');
	}, [formState]);

	// Solo cuando email cambio.
	useEffect(() => {
		// console.log('email cambio');
	}, [email]);

	const handleInputChange = ({ target }) => {
		// console.log(e.target);
		setFormState({
			...formState,
			[target.name]: target.value
		})
	}

	return (
		<>
			<h1>UseEffect</h1>
			<hr/>

			<div className="form-group">
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Tu Nombre"
					autoComplete="off"
					value={ name }
					onChange = { handleInputChange }
				/>
			</div>

			<div className="form-group">
				<input
					type="text"
					name="email"
					className="form-control"
					placeholder="email@dominio.com"
					autoComplete="off"
					value={ email }
					onChange = { handleInputChange }
				/>
			</div>

			{/* Si el name es igual a 123 se muestra el mensaje */}
			{ (name === '123') && <Message/> }
		</>
	)
}
