import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/processoPesado';
import { useCounter } from '../../hooks/useCounter'
import './styles.css'
export const MemoHook = () => {

	const { counter, increment } = useCounter(5000);

	const [show, setShow] = useState(true);

	const change = () => {
		setShow(!show);
	}

	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

	return (
		<>
			<h1>MemoHook</h1>
			{/* <h2>Counter: <small>{ counter }</small></h2> */}
			<h3>Counter: {counter}</h3>
			<hr/>

			<p>{ memoProcesoPesado }</p>

			<button
				onClick={ increment }
				className="btn btn-sm btn-outline-primary mr-3"
			>
				+1
			</button>

			<button
				onClick={ change }
				className="btn btn-sm btn-outline-primary"
			>
				Show & Hide {JSON.stringify(show)}
			</button>
		</>
	)
}
