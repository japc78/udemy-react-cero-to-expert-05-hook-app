import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './styles.css'
export const MultipleCustomHooks = () => {

	const { counter, increment } = useCounter(1);

	// const state = useFecth('https://www.breakingbadapi.com/api/quotes/1');
	const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

	//doble negacion !! esplicacion: !data, sino tiene valor, !!data == data, es decir si tiene valor.
	// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operadores_l%C3%B3gicos
	const { author, quote } = !!data && data[0];

	// console.log(loading);

	return (
		<>
			<h1>BreakingBad Quotes</h1>
			<hr/>

			{
				loading
				?
				(<div className="alert alert-info">loading...</div>)
				:
				(
					<blockquote className="blockquote text-right">
						<p className="mb-0">{quote}</p>
						<footer className="blockquote-footer">{author}</footer>
					</blockquote>
				)
			}

			<button className="btn btn-primary" onClick={ increment }>Siguiente frase</button>
		</>
	)
}
