import React from 'react'

export const Small = React.memo(({ value }) => {
	console.log("Se volvio a llamar :( ");
	return (
		<small>
			{value}
		</small>
	)
});
