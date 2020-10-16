import React, { useRef, useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import './styles.css'
export const RealExampleRef = () => {

	const [show, setShow] = useState(false);
	const change = () => {
		//Cambia show al valor opuesto
		setShow(!show)
	}



	return (
		<>
			<h1>RealExampleRef</h1>
			<hr/>

			{/* Si show esta en true muestra el componente, sino lo oculta */}
			{show && <MultipleCustomHooks />}

			<button
				className="btn btn-sm btn-outline-primary d-block mt-3"
				onClick = { change }
			>Show & Hide</button>

		</>
	)
}
