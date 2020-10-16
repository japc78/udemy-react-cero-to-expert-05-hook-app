import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';
import './styles.css'
export const Memorize = () => {

	const { counter, increment } = useCounter(1);

	const [show, setShow] = useState(true);

	const change = () => {
		setShow(!show);
	}

	return (
		<>
			<h1>Memorize</h1>
			{/* <h2>Counter: <small>{ counter }</small></h2> */}
			<h2>Counter: <Small value={counter} /></h2>

			<br/>
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
