import { useEffect, useState } from 'react'

export const useFecth = ( url ) => {
	const [state, setState] = useState({ data: null, loading: true, error: null})

	useEffect(() => {

		//Para que salga siempre loading al leer un nuevo elemento
		setState ( {
			...state,
			loading: true
		})

		fetch(url)
			.then( resp => resp.json() )
			.then( data => {
				setState({
					loading: false,
					error: null,
					data
				})
			})

	}, [url])

	return state
}
