import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFecth } from '../../hooks/useFecth'
import './styles.css'
export const LayoutEffect = () => {

	const { counter, increment } = useCounter(1);

	// const state = useFecth('https://www.breakingbadapi.com/api/quotes/1');
	const { data } = useFecth(`https://www.breakingbadapi.com/api/quotes/${counter}`);

	//doble negacion !! esplicacion: !data, sino tiene valor, !!data == data, es decir si tiene valor.
	// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operadores_l%C3%B3gicos
	const { quote } = !!data && data[0];

	const [boxSize, setBoxSize] = useState({})

	const {width, height} = boxSize;

	// console.log(loading);

	const pTag = useRef();

	//Solo se actualualiza cuando el quote cambia
	useLayoutEffect(() => {
		console.log(pTag.current.getBoundingClientRect());
		setBoxSize(pTag.current.getBoundingClientRect())
	}, [quote])

	return (
		<>
			<h1>LayoutEffect</h1>
			<hr/>

			<blockquote className="blockquote text-right">
				<p ref={ pTag } className="mb-0">{quote}</p>
			</blockquote>

			<ul>
				<li>width: {width}</li>
				<li>height: {height}</li>
			</ul>

			<pre>{JSON.stringify(boxSize, null, 3)}</pre>

			<button className="btn btn-primary" onClick={ increment }>Siguiente frase</button>
		</>
	)
}
