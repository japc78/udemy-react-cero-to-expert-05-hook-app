import React, { useRef } from 'react'
import './styles.css'
export const FocusScreen = () => {

	const inputRef = useRef();
	// console.log(inputRef);

	const handleClick = () => {
		// document.querySelector('input').focus();
		// document.querySelector('input').select();

		// Con useRef
		inputRef.current.select();

	}

	return (
		<>
			<h1>FocusScreen</h1>
			<hr/>

			<div className="mb-3">
				<input
					ref = { inputRef }
					type="text"
					className="form-contol"
					placeholder="Su nombre"
				/>
			</div>
			<button onClick={ handleClick } className="btn btn-sm btn-outline-primary">Focus</button>
		</>
	)
}
