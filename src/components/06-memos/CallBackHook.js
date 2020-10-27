import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement';
import './styles.css'
export const CallBackHook = () => {

	const [counter, setCounter] = useState(10);

	// const increment = () => {
	// 	setCounter(counter + 1);
	// }

	// const increment = useCallback(() => {
	// 	setCounter(counter + 1);
	// }, [ setCounter])


	const increment = useCallback((num) => {
		setCounter(c => c + num);
	}, [ setCounter])

	return (
		<>
			<h1>useCallBack Hook: {counter}</h1>
			<hr/>

			<ShowIncrement  increment = { increment }/>

		</>
	)
}
