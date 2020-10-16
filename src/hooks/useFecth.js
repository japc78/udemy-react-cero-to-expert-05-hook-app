import { useEffect, useRef, useState } from 'react'

export const useFecth = ( url ) => {
	const isMounted = useRef(true);

	const [state, setState] = useState({ data: null, loading: true, error: null})


	// Creamos un useEffect para poder controlar si el componente esta montado o no, [] en el segundo atributo indica que solo se ejecutara el use effects cuando se desmonte el componente y en ese caso cambiamos el valor del useRef isMounted a false.
	useEffect(() => {
		return () => {
			isMounted.current = false;
		}
	}, [])


	useEffect(() => {

		//Para que salga siempre loading al leer un nuevo elemento
		setState ( {
			...state,
			loading: true
		})

		fetch(url)
			.then( resp => resp.json() )
			.then( data => {

				//Si es verdadero monta el componente.
				if (isMounted.current) {
					setState({
						loading: false,
						error: null,
						data
					})
				}
			})

	}, [url])

	return state
}
